import FanPointsClient from './FanPointsClient';
import { Currency } from './queries/generated/sdk';
import { unwrap } from './utils/errors';

/**
 *
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
     * @param userId - the id of the user
     * @returns an object containing the total amount of fan points the user has collected.
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
     * Returns all FanPoints transactions connected to the given user.
     *
     * @remarks
     * The returned transactions are sorted by date, with the most recent
     * transaction being first.
     *
     * The parameters limit and lastReturnedTransaction can be used
     * to paginate the results.
     *
     * If limit is given, at most limit transactions
     * will be returned. If earlierThan is given, only transactions
     * thah happened before this transaction will be returned. Combine
     * both parameters to paginate the results.
     *
     * @param userId - the id of the user
     * @param limit - the maximum number of transactions to return
     * @param earlierThan - if given, transactions before this date will be returned
     *
     * @returns an object containing the relevant transactions.
     */
    public async getTransactions(
        userId: string,
        partnerId?: string,
        limit?: number,
        earlierThan?: string,
    ) {
        const partnersToQuery = partnerId
            ? [this.client.getPartner(partnerId)]
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

    public async giveFanPointsOnPurchase(
        userId: string,
        purchaseItems: {
            partnerId?: string;
            title: string;
            description: string;
            price: number;
            currency: Currency;
            tags: string[];
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

    public async payPurchaseWithFanPoints(
        userId: string,
        purchaseItems: {
            partnerId?: string;
            title: string;
            description: string;
            price: number;
            currency: Currency;
            tags: string[];
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

    public async undoPurchase(
        purchaseId: string,
        purchaseItemId?: string,
        specificPartnerId?: string,
    ) {
        const { sdk, partnerId } = this.client.getPartner(specificPartnerId);
        const result = (
            await sdk.undoFanPointsPurchase({
                partnerId,
                purchaseId,
                purchaseItemId,
            })
        ).data.undoFanPointsPurchase;
        return unwrap(result);
    }
}
