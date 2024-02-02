import FanPointsClient from './FanPointsClient';
import { Currency } from './queries/generated/sdk';
import { unwrap } from './utils/errors';

/**
 * This class allows you to interact with the FanPoints module. The FanPoints
 * module allows to distribute FanPoints to users and collect FanPoints from a
 * user as a method of payment.
 */
export class FanPointsModule {
    /** @hidden */
    constructor(private client: FanPointsClient) {}

    /**
     * Returns the total amount FanPoints the user has collected.
     *
     * @param userId - the id of the user.
     * @returns an object containing the total amount of fan points the user has collected.
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
     * If you configured multiple partners, you can use the `specificPartnerId`
     * parameter to only query transactions at the specific partner. If you configured
     * multiple partners and don't provide a `specificPartnerId`, transactions
     * at all partners will be returned.
     *
     * If `limit` is given, at most `limit` transactions
     * will be returned. If `earlierThan` is given, only transactions
     * thah happened before this transaction will be returned. Combine
     * both parameters to paginate the results.
     *
     * @param userId - the id of the user
     * @param specificPartnerId - only return transactions at this partner if multiple partners are configured
     * @param limit - the maximum number of transactions to return
     * @param earlierThan - if given, transactions before this date will be returned
     *
     * @returns an list of the transactions.
     *
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`).
     */
    public async getTransactions(
        userId: string,
        specificPartnerId?: string,
        limit?: number,
        earlierThan?: string,
    ) {
        const partnersToQuery = specificPartnerId
            ? [this.client.getPartner(specificPartnerId)]
            : this.client.getPartners();

        const transactions = [];

        for (const { sdk, partnerId } of partnersToQuery) {
            const result = await sdk.getFanPointsTransactions({
                projectId: this.client.loyaltyProgramId,
                partnerId,
                userId,
                limit,
                earlierThan,
            });
            transactions.push(...unwrap(result.data.getFanPointsTransactions));
        }

        return transactions;
    }

    /**
     * Gives FanPoints to the user for the given purchase.
     *
     * The title and description can be used to add human readable information on the
     * transaction that could be used to display to the user.
     *
     * Each purchase item can correspond at a different partner. If no partner is given, the
     * default partner will be used.
     *
     * Each purchase item can have a different rate category. If no rate category is given, the
     * default rate category of the partner will be used.
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
     * or if one of the rate categories does not exist (`invalidRateCategoryError`).
     */
    public async giveFanPointsOnPurchase(
        userId: string,
        purchaseItems: {
            partnerId?: string;
            title: string;
            description: string;
            price: number;
            currency: Currency;
            rate_category: string | undefined;
        }[],
        customPurchaseId?: string,
    ) {
        const purchaseItemsPerPartner = {} as Record<
            string,
            typeof purchaseItems
        >;
        purchaseItems.forEach((purchaseItem) => {
            const partnerId = this.client.getPartner(
                purchaseItem.partnerId,
            ).partnerId;
            purchaseItemsPerPartner[partnerId].push(purchaseItem);
        });

        const resultingPurchaseItems = [];
        for (const [partnerId, purchaseItems] of Object.entries(
            purchaseItemsPerPartner,
        )) {
            const { sdk } = this.client.getPartner(partnerId);
            const result = (
                await sdk.giveFanPointsOnPurchase({
                    projectId: this.client.loyaltyProgramId,
                    userId,
                    partnerId,
                    purchaseItems,
                    customPurchaseId,
                })
            ).data.giveFanPointsOnPurchase;
            resultingPurchaseItems.push(...unwrap(result));
        }

        return resultingPurchaseItems;
    }

    /**
     * Allows a user to pay a purchase using FanPoints.
     *
     * The title and description can be used to add human readable information on the
     * transaction that could be used to display to the user.
     *
     * Each purchase item can correspond at a different partner. If no partner is given, the
     * default partner will be used.
     *
     * Each purchase item can have a different rate category. If no rate category is given, the
     * default rate category of the partner will be used.
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
     * or if one of the rate categories does not exist (`invalidRateCategoryError`).
     */
    public async payPurchaseWithFanPoints(
        userId: string,
        purchaseItems: {
            partnerId?: string;
            title: string;
            description: string;
            price: number;
            currency: Currency;
            rate_category: string | undefined;
        }[],
        customPurchaseId?: string,
    ) {
        const purchaseItemsPerPartner = {} as Record<
            string,
            typeof purchaseItems
        >;
        purchaseItems.forEach((purchaseItem) => {
            purchaseItemsPerPartner[
                this.client.getPartner(purchaseItem.partnerId).partnerId
            ].push(purchaseItem);
        });

        const resultingPurchaseItems = [];
        for (const [partnerId, purchaseItems] of Object.entries(
            purchaseItemsPerPartner,
        )) {
            const { sdk } = this.client.getPartner(partnerId);
            const result = (
                await sdk.payPurchaseWithFanPoints({
                    projectId: this.client.loyaltyProgramId,
                    userId,
                    partnerId,
                    purchaseItems,
                    customPurchaseId,
                })
            ).data.payPurchaseWithFanPoints;
            resultingPurchaseItems.push(...unwrap(result));
        }

        return resultingPurchaseItems;
    }

    /**
     * Undoes a purchase.
     *
     * This will reverse the effect of e.g. giving FanPoints or paying with FanPoints.
     *
     * You can either undo a specific purchase item or the whole purchase.
     *
     * Note that this might not be possible, e.g. if the FanPoints have already been
     * spent by the user.
     *
     * Undoing a purchase corresponds to creating a new purchase with a negative price.
     * This operation is idempotent w.r.t. the purchase id and purchase item id. This means
     * that if you call this method twice with the same arguments, the second call will not
     * have any effect.
     *
     * If you configured multiple partners, you can use the `specificPartnerId` parameter
     * to specify the partner where the purchase happened. If you configured multiple partners
     * and don't provide a `specificPartnerId`, the default partner will be used.
     *
     * @param userId - the id of the user that performed the purchase to undo
     * @param purchaseId - the id of the purchase to undo
     * @param purchaseItemId - the id of the purchase item to undo
     * @param specificPartnerId - the id of the partner where the purchase happened if multiple partners are configured
     *
     * @returns an list of the performed undo purchases.
     *
     * @throws {@link RequestError} if the purchase does not exist (`transactionNotFoundError`),
     * if the user does not have enough FanPoints (`tooFewAvailableError`), or if the purchase
     * has already been undone (`alreadyExecutedError`).
     */
    public async undoPurchase(
        userId: string,
        purchaseId: string,
        purchaseItemId?: string,
        specificPartnerId?: string,
    ) {
        const { sdk, partnerId } = this.client.getPartner(specificPartnerId);
        const result = (
            await sdk.undoFanPointsPurchase({
                userId,
                projectId: this.client.loyaltyProgramId,
                partnerId,
                purchaseId,
                purchaseItemId,
            })
        ).data.undoFanPointsPurchase;
        return unwrap(result);
    }
}
