import { v4 as uuidv4 } from 'uuid';
import FanPointsClient from './FanPointsClient';
import {
    Currency,
    PurchaseItemInput,
    PurchaseItemPriceInput,
} from './queries/generated/sdk';
import { unwrap } from './utils/errors';

/**
 * This class allows you to interact with the FanPoints module. The FanPoints
 * module allows to distribute FanPoints to users and collect FanPoints from a
 * user as a method of payment.
 */
export class FanPointsModule<PartnerLabel extends string> {
    /** @hidden */
    constructor(private client: FanPointsClient<PartnerLabel>) {}

    /**
     * Returns the total number of Fan Points the user has collected.
     *
     * @param userId - the id of the user.
     * @returns an object containing the total amount of Fan Points the user has collected as well as the amount that can be purchased with these points.
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`).
     */
    public async getBalance(userId: string) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.getFanPointsBalance({
            projectId: loyaltyProgramId,
            userId,
        });
        return unwrap(result.data.getFanPointsBalance);
    }

    /**
     * Returns all Fan Points transactions of the given user at partners.
     *
     * The returned transactions contains both transactions where the user
     * received FanPoints on a purchase and transactions where the user purchased
     * using FanPoints.
     *
     * If `limit` is given, at most `limit` transactions
     * will be returned. If `earlierThan` is given, only transactions
     * that happened before this transaction will be returned. Combine
     * both parameters to paginate the results.
     *
     * @param userId - the id of the user
     * @param limit - the maximum number of transactions to return
     * @param earlierThan - if given, transactions before this date will be returned
     *
     * @returns a list of the transactions.
     *
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`).
     */
    public async getTransactions(
        userId: string,
        limit?: number,
        earlierThan?: Date,
    ) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.getFanPointsTransactions({
            projectId: loyaltyProgramId,
            userId,
            limit,
            earlierThan: earlierThan?.toISOString(),
        });
        return unwrap(result.data.getFanPointsTransactions);
    }

    /**
     * Returns the Fan Points transactions of the given user, purchaseId and partner.
     *
     * This method can return both transactions where the user received FanPoints on a purchase
     * and transactions where the user purchased using FanPoints.
     *
     * @param userId - the id of the user
     * @param purchaseId - the id of the purchase to return
     * @param partnerId - the id of the partner where the purchase happened
     * @param partnerLabel - the label of the partner where the purchase happened
     * @returns the transaction
     */
    public async getTransaction(
        userId: string,
        purchaseId: string,
        partnerId?: string,
        partnerLabel?: PartnerLabel,
    ) {
        const { sdk, partnerId: specificPartnerId } = this.client.getPartner(
            partnerId,
            partnerLabel,
        );
        const result = await sdk.getFanPointsTransaction({
            projectId: this.client.loyaltyProgramId,
            userId,
            purchaseId,
            partnerId: specificPartnerId,
        });
        return unwrap(result.data.getFanPointsTransaction);
    }

    /**
     * Gives Fan Points to the user for the given purchase and purchase items.
     *
     * The titles and descriptions can be used to add human readable information on the
     * transaction that could be used to display to the user.
     *
     * Each purchase item can correspond at a different partner. If no partner is given, the
     * default partner will be used. You can set the partner using the `partnerId` or the
     * `partnerLabel` parameter. If both are given, the `partnerId` will be used.
     *
     * Each purchase item can have a different rate label in order to specify the conversion rate
     * from the price to the number of Fan Points. If no rate label is given, the
     * default rate of the partner will be used.
     *
     * A custom purchase id can be given in order to link the transaction to a specific event
     * on your side. This operation is idempotent w.r.t. the purchase group id. This means that
     * if you call this method twice with the same custom group id, the second call will not have
     * any effect and an error will be raised.
     *
     * @param userId - the id of the user to give FanPoints to
     * @param purchaseItems - the items that were purchased
     * @param customPurchaseId - an optional custom purchase id
     *
     * @returns a list of the resulting purchase transactions
     *
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`),
     * if the given price is not valid (`invalidRewardAmountError`), if the custom
     * purchase id is not valid (`invalidTransactionIdError`), if a transaction
     * with the given custom purchase id already exists (`alreadyExecutedError`),
     * if the given custom purchase item ids are not unique (`nonUniquePurchaseItemIdsError`),
     * or if one of the rate categories does not exist (`invalidRateCategoryError`).
     */
    public async giveFanPointsOnPurchase(
        userId: string,
        purchaseItems: {
            title: string;
            description: string;
            price: number;
            currency?: Currency;
            partnerId?: string;
            partnerLabel?: PartnerLabel;
            rateLabel?: string;
            customPurchaseItemId?: string;
        }[],
        customPurchaseId?: string,
    ) {
        const purchaseItemsPerPartner = {} as Record<
            string,
            PurchaseItemInput[]
        >;
        purchaseItems.forEach((purchaseItem) => {
            const { partnerId, defaultCurrency } = this.client.getPartner(
                purchaseItem.partnerId,
                purchaseItem.partnerLabel,
            );

            const modfiedPurchaseItem = {
                ...purchaseItem,
                rate_label: purchaseItem.rateLabel,
                custom_purchase_item_id: purchaseItem.customPurchaseItemId,
                currency: purchaseItem.currency || defaultCurrency,
            };
            delete modfiedPurchaseItem.rateLabel;
            delete modfiedPurchaseItem.partnerLabel;
            delete modfiedPurchaseItem.customPurchaseItemId;

            if (!purchaseItemsPerPartner[partnerId]) {
                purchaseItemsPerPartner[partnerId] = [];
            }
            purchaseItemsPerPartner[partnerId].push(modfiedPurchaseItem);
        });

        const purchaseId = customPurchaseId || uuidv4();

        const results = Object.entries(purchaseItemsPerPartner).map(
            async ([partnerId, purchaseItems]) => {
                const { sdk } = this.client.getPartner(partnerId);
                const result = (
                    await sdk.giveFanPointsOnPurchase({
                        projectId: this.client.loyaltyProgramId,
                        userId,
                        partnerId,
                        purchaseItems: purchaseItems,
                        customPurchaseId: purchaseId,
                    })
                ).data.giveFanPointsOnPurchase;
                return unwrap(result);
            },
        );
        return Promise.all(results);
    }

    /**
     * @deprecated
     *
     * Allows a user to pay a purchase using FanPoints.
     *
     * This method directly performs the payment. It is recommended to use the `createFanPointsPaymentSession`
     * method for a simpler payment flow, where a payment session is created, where you can redirect the user
     * to a dedicated FanPoints checkout page hosted by the loyalty program. This allows to authenticate the
     * user on the checkout page hosted by the loyalty program.
     *
     * The titles and descriptions can be used to add human readable information on the
     * transaction that could be used to display to the user.
     *
     * Each purchase item can correspond at a different partner. If no partner is given, the
     * default partner will be used. You can set the partner using the `partnerId` or the
     * `partnerLabel` parameter. If both are given, the `partnerId` will be used.
     *
     * A custom purchase id can be given in order to link the transaction to a specific event
     * on your side. This operation is idempotent w.r.t. the purchase group id. This means that
     * if you call this method twice with the same custom group id, the second call will not have
     * any effect and an error will be raised.
     *
     * @param userId - the id of the user to give FanPoints to
     * @param purchaseItems - the items that were purchased
     * @param customPurchaseId - an optional custom purchase id
     *
     * @returns a list of the resulting purchase transactions
     *
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`),
     * if the user does not have enough FanPoints (`tooFewAvailableError`),
     * if the given price is not valid (`invalidRewardAmountError`), if the custom
     * purchase id is not valid (`invalidTransactionIdError`), if a transaction
     * with the given custom purchase id already exists (`alreadyExecutedError`),
     * if the given custom purchase item ids are not unique (`nonUniquePurchaseItemIdsError`),
     * or if one of the rate categories does not exist (`invalidRateCategoryError`).
     */
    public async payPurchaseWithFanPoints(
        userId: string,
        purchaseItems: {
            partnerId?: string;
            title: string;
            description: string;
            price: number;
            currency?: Currency;
            partnerLabel?: PartnerLabel;
            customPurchaseItemId?: string;
        }[],
        customPurchaseId?: string,
    ) {
        const purchaseItemsPerPartner = {} as Record<
            string,
            PurchaseItemInput[]
        >;
        purchaseItems.forEach((purchaseItem) => {
            const { partnerId, defaultCurrency } = this.client.getPartner(
                purchaseItem.partnerId,
                purchaseItem.partnerLabel,
            );

            const modfiedPurchaseItem = {
                ...purchaseItem,
                rate_label: undefined,
                custom_purchase_item_id: purchaseItem.customPurchaseItemId,
                currency: purchaseItem.currency || defaultCurrency,
            };
            delete modfiedPurchaseItem.partnerLabel;
            delete modfiedPurchaseItem.customPurchaseItemId;

            if (!purchaseItemsPerPartner[partnerId]) {
                purchaseItemsPerPartner[partnerId] = [];
            }
            purchaseItemsPerPartner[partnerId].push(modfiedPurchaseItem);
        });

        const purchaseId = customPurchaseId || uuidv4();

        const results = Object.entries(purchaseItemsPerPartner).map(
            async ([partnerId, purchaseItems]) => {
                const { sdk } = this.client.getPartner(partnerId);
                const result = (
                    await sdk.payPurchaseWithFanPoints({
                        projectId: this.client.loyaltyProgramId,
                        userId,
                        partnerId,
                        purchaseItems: purchaseItems,
                        customPurchaseId: purchaseId,
                    })
                ).data.payPurchaseWithFanPoints;
                return unwrap(result);
            },
        );
        return Promise.all(results);
    }

    /**
     * Creates a new payment session which can be used to allow payment with FanPoints.
     *
     * The flow is as follows:
     *
     * 1. When your user chooses to pay with FanPoints, you can use this method to create a payment session.
     * 2. The payment session has a unique session URL with the checkout form hosted by the loyalty program.
     *    Redirect your user to this URL.
     * 3. The user completes the checkout and is redirected to the given callback URL or cancellation URL.
     *
     * This flow is preferred over the `payPurchaseWithFanPoints` method as it allows to properly authenticate
     * the user on the checkout page hosted by the loyalty program.
     *
     * @param price - the price of the purchase
     * @param currency - the currency of the price
     * @param displayPrice - whether the price (in the currency) should be displayed on the checkout page in addition to the number of FanPoints
     * @param cancelUrl - the URL to redirect to if the user cancels the payment
     * @param successUrl - the URL to redirect to if the user completes the payment successfully
     * @param loyaltyProgramId - the ID of the loyalty program, where the user belongs to (only needed if the client config does not contain a loyalty program ID)
     * @param customPurchaseId - an optional custom purchase id which can be used to link the payment to a specific purchase in your system
     * @param partnerId - the id of the partner where the purchase happened (only needed if the client config does not contain a partner ID)
     * @param partnerLabel - the label of the partner where the purchase happened (optional)
     *
     * @returns the created session with the session URL
     */
    public async createFanPointsPaymentSession(
        price: number,
        currency: Currency,
        displayPrice: boolean,
        cancelUrl: string,
        successUrl: string,
        loyaltyProgramId?: string,
        customPurchaseId?: string,
        partnerId?: string,
        partnerLabel?: PartnerLabel,
    ) {
        const { sdk, partnerId: specificPartnerId } = this.client.getPartner(
            partnerId,
            partnerLabel,
        );

        if (!loyaltyProgramId) {
            loyaltyProgramId = this.client.loyaltyProgramId;
        }

        if (!loyaltyProgramId) {
            throw new Error(
                'A loyalty program id has to be provided by either the client config or as a direct function argument.',
            );
        }

        const result = await sdk.createFanPointsPaymentSession({
            projectId: loyaltyProgramId,
            partnerId: specificPartnerId,
            price,
            currency,
            displayPrice,
            cancelUrl,
            successUrl,
            customPurchaseId,
        });
        return unwrap(result.data.createFanPointsPaymentSession);
    }

    /**
     * Undoes a purchase.
     *
     * This will reverse the effect of giving out FanPoints or paying with FanPoints.
     *
     * The `purchaseItems` parameter specifies what items of the given purchase (`purchaseId`)
     * should be undone. You don't have to undo all items of a purchase.
     *
     * Note that undoing a purchase might not be possible, e.g. if the FanPoints have already been
     * spent by the user.
     *
     * Undoing a purchase corresponds to creating a new purchase with a negative price.
     * This operation is idempotent w.r.t. the purchase id and purchase item id. This means
     * that if you call this method twice with the same arguments, the second call will not
     * have any effect.
     *
     * If you configured multiple partners, you can use the `specificPartnerId` parameter
     * ot the `partnerLabel` parameter to specify the partner where the purchase happened.
     * If you configured multiple partners and don't provide a `specificPartnerId`, the
     * default partner will be used.
     *
     * @param userId - the id of the user that performed the purchase to undo
     * @param purchaseId - the id of the purchase to undo
     * @param purchaseItems - the purchase items to undo
     *
     * @returns an list of the performed undo purchases
     *
     * @throws {@link RequestError} if the purchase does not exist (`transactionNotFoundError`),
     * if the user does not have enough FanPoints (`tooFewAvailableError`), or if the purchase
     * has already been undone (`alreadyExecutedError`).
     */
    public async undoPurchase(
        userId: string,
        purchaseId: string,
        purchaseItems: {
            purchaseItemId: string;
            specificPartnerId?: string;
            partnerLabel?: PartnerLabel;
        }[],
    ) {
        const results = purchaseItems.map(async (purchaseItem) => {
            const { partnerId, sdk } = this.client.getPartner(
                purchaseItem.specificPartnerId,
                purchaseItem.partnerLabel,
            );
            const result = (
                await sdk.undoFanPointsPurchase({
                    userId,
                    projectId: this.client.loyaltyProgramId,
                    partnerId,
                    purchaseId,
                    purchaseItemId: purchaseItem.purchaseItemId,
                })
            ).data.undoFanPointsPurchase;
            return unwrap(result);
        });

        return await Promise.all(results);
    }

    /**
     * Returns the number of Fan Points that correspond to the given price.
     *
     * If multiple partners are configured, you can use the `partnerId` or the `partnerLabel`
     * parameter to specify the partner where the purchase happens.
     *
     * @param price - the price in the default currency of the partner or the currency given in the `currency` parameter
     * @param partnerId - the id of the partner where the purchase happens
     * @param partnerLabel - the label of the partner where the purchase happens
     * @param currency - the currency of the price
     *
     * @returns the number of Fan Points that correspond to the given price
     *
     * @throws {@link RequestError} if the given price is not valid (`InvalidRewardAmountError`).
     */
    public async getPriceInFanPoints(
        price: number,
        partnerId?: string,
        partnerLabel?: PartnerLabel,
        currency?: Currency,
    ) {
        const {
            sdk,
            partnerId: specificPartnerId,
            defaultCurrency,
        } = this.client.getPartner(partnerId, partnerLabel);
        const result = await sdk.getPriceInFanPoints({
            partnerId: specificPartnerId,
            price,
            currency: currency || defaultCurrency,
        });
        return unwrap(result.data.getPriceInFanPoints);
    }

    /**
     * Estimates how many Fan Points a user would receive for the given purchase.
     *
     * This allows you to check how many Fan Points a user would receive for
     * a given purchase. It does not actually distribute the Fan Points. Use
     * {@link giveFanPointsOnPurchase} to distribute Fan Points.
     *
     * @param purchaseItems - the items that were purchased
     *
     * @returns the amount of Fan Points the user would receive.
     */
    public async estimateGivenOutFanPointsOnPurchase(
        purchaseItems: {
            partnerId?: string;
            price: number;
            currency?: Currency;
            partnerLabel?: PartnerLabel;
            rateLabel?: string;
        }[],
    ) {
        const purchaseItemsPerPartner = {} as Record<
            string,
            PurchaseItemPriceInput[]
        >;
        purchaseItems.forEach((purchaseItem) => {
            const { partnerId, defaultCurrency } = this.client.getPartner(
                purchaseItem.partnerId,
                purchaseItem.partnerLabel,
            );

            const modfiedPurchaseItem = {
                ...purchaseItem,
                rate_label: purchaseItem.rateLabel,
                currency: purchaseItem.currency || defaultCurrency,
            };
            delete modfiedPurchaseItem.rateLabel;
            delete modfiedPurchaseItem.partnerLabel;

            if (!purchaseItemsPerPartner[partnerId]) {
                purchaseItemsPerPartner[partnerId] = [];
            }
            purchaseItemsPerPartner[partnerId].push(modfiedPurchaseItem);
        });

        const results = Object.entries(purchaseItemsPerPartner).map(
            async ([partnerId, purchaseItems]) => {
                const { sdk } = this.client.getPartner(partnerId);
                const result = (
                    await sdk.estimateGivenOutFanPointsOnPurchase({
                        partnerId,
                        purchaseItems: purchaseItems,
                    })
                ).data.estimateGivenOutFanPointsOnPurchase;
                return unwrap(result);
            },
        );
        return (await Promise.all(results)).reduce((acc, val) => acc + val, 0);
    }

    /**
     * Registers a Tixevo checkout.
     *
     * This method allows you to register a new or modified raw Tixevo checkout.
     *
     * @param jsonPayload - The JSON payload of the Tixevo checkout as a string.
     * @param partnerId - The ID of the partner where the checkout happened.
     * @param partnerLabel - The label of the partner where the checkout happened.
     *
     * @throws {@link RequestError} if the payload is not in the expected
     * format (`invalidDataFormatError`).
     */
    public async registerTixevoCheckout(
        jsonPayload: string,
        partnerId?: string,
        partnerLabel?: PartnerLabel,
    ) {
        const { sdk, partnerId: specificPartnerId } = this.client.getPartner(
            partnerId,
            partnerLabel,
        );
        const result = await sdk.registerTixevoCheckout({
            partnerId: specificPartnerId,
            jsonPayload,
        });
        return unwrap(result.data.registerTixevoCheckout);
    }
}
