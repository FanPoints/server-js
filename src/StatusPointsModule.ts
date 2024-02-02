import FanPointsClient from './FanPointsClient';
import { unwrap } from './utils/errors';

/**
 * This class allows you to interact with the StatusPoints module. The StatusPoints
 * module allows to distribute Status Points to users to reward engagement.
 */
export class StatusPointsModule {
    /** @hidden */
    constructor(private client: FanPointsClient) {}

    /**
     * Returns the total amount Status Points the user has collected.
     *
     * @param userId - the id of the user.
     * @returns an object containing the total amount of Status Points the user has collected.
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`).
     */
    public async getBalance(userId: string) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.getStatusPointsBalance({
            projectId: loyaltyProgramId,
            userId,
        });
        return unwrap(result.data.getStatusPointsBalance);
    }

    /**
     * Returns all Status Points actions of the given user at partners.
     *
     * If you configured multiple partners, you can use the `specificPartnerId`
     * parameter to only query actions at the specific partner. If you configured
     * multiple partners and don't provide a `specificPartnerId`, actions
     * at all partners will be returned.
     *
     * If `limit` is given, at most `limit` actions
     * will be returned. If `earlierThan` is given, only actions
     * thah happened before this action will be returned. Combine
     * both parameters to paginate the results.
     *
     * @param userId - the id of the user
     * @param specificPartnerId - only return actions at this partner if multiple partners are configured
     * @param limit - the maximum number of actions to return
     * @param earlierThan - if given, actions before this date will be returned
     *
     * @returns an list of the actions.
     *
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`).
     */
    public async getPerformedActions(
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
            const result = await sdk.getStatusPointsTransactions({
                projectId: this.client.loyaltyProgramId,
                partnerId,
                userId,
                limit,
                earlierThan,
            });
            transactions.push(
                ...unwrap(result.data.getStatusPointsTransactions),
            );
        }

        return transactions;
    }

    /**
     * Returns the amount of Status Points the user would receive for the given
     * action.
     *
     * This allows you to check how many Status Points a user would receive for
     * a given action. It does not actually distribute the Status Points. Use
     * {@link distributeStatusPoints} to distribute Status Points.
     *
     * @param actionCategory - the action to check
     * @param specificPartnerId - the id of the specific partner if multiple partners are configured
     *
     * @returns an object containing the amount of Status Points the user would receive.
     *
     * @throws {@link RequestError} if the action category does not exist (`invalidActionCategoryError`).
     */
    public async getStatusPointsForAction(
        actionCategory: string,
        specificPartnerId?: string,
    ) {
        const { sdk, partnerId } = this.client.getPartner(specificPartnerId);
        const result = await sdk.getStatusPointsForAction({
            partnerId,
            actionCategory,
        });
        return unwrap(result.data.getStatusPointsForAction);
    }

    /**
     * Distributes Status Points to a user. Every distribution is connected to an
     * action and a partner. The actual number of Status Points the user receives
     * depends on the action and the partner and can be accessed using the
     * {@link getStatusPointsForAction} method and can be set in the FanPoints
     * backend.
     *
     * This allows users to earn Status Points to reward them for engaging with
     * the given partner.
     *
     * The title and description can be used to add human readable information
     * on the action that could be used to display to the user.
     *
     * A custom action id can be given in order to link the action to a
     * specific event on your side. This operation is idempotent w.r.t. the
     * custom action id. This means that if you call this method twice with the
     * same custom action id, the second call will not have any effect and an
     * error will be thrown.
     *
     * @param userId - the id of the user
     * @param actionCategory - the category of the action performed
     * @param title - the title of the action
     * @param description - the description of the action
     * @param specificPartnerId - the id of the specific partner if multiple partners are configured
     * @param customActionId - the id of the custom action to link it to an event on your side
     *
     * @returns an list containing the performed Status Points transactions.
     *
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`), if the
     * custom action id is not valid (`invalidTransactionIdError`), if a transaction
     * with the given custom action id already exists (`alreadyExecutedError`),
     * or if the action category does not exist (`invalidActionCategoryError`).
     */
    public async giveStatusPointsOnAction(
        userId: string,
        actionCategory: string,
        title: string,
        description: string,
        specificPartnerId?: string,
        customActionId?: string,
    ) {
        const { sdk, partnerId } = this.client.getPartner(specificPartnerId);
        const result = (
            await sdk.giveStatusPoints({
                projectId: this.client.loyaltyProgramId,
                userId,
                partnerId,
                actionCategory,
                title,
                description,
                customActionId,
            })
        ).data.giveStatusPoints;
        return unwrap(result);
    }

    /**
     * Undoes an action.
     *
     * This will reverse the effect of giving Status Points to the user.
     *
     * Undoing an action corresponds to creating a new action with a negative number of Status Points.
     * This operation is idempotent w.r.t. the action id. This means that if you call this method twice
     * with the same arguments, the second call will not have any effect and an error is thrown.
     *
     * If you configured multiple partners, you can use the `specificPartnerId` parameter
     * to specify the partner where the action happened. If you configured multiple partners
     * and don't provide a `specificPartnerId`, the default partner will be used.
     *
     * @param userId - the id of the user that performed the action
     * @param actionId - the id of the action to undo
     * @param specificPartnerId - the id of the partner where the action happened if multiple partners are configured
     *
     * @returns an list of the performed undo actions.
     *
     * @throws {@link RequestError} if the action does not exist (`transactionNotFoundError`),
     * or if the action has already been undone (`alreadyExecutedError`).
     */
    public async undoAction(
        userId: string,
        actionId: string,
        specificPartnerId?: string,
    ) {
        const { sdk, partnerId } = this.client.getPartner(specificPartnerId);
        const result = (
            await sdk.undoStatusPointsTransaction({
                userId,
                projectId: this.client.loyaltyProgramId,
                partnerId,
                actionId,
            })
        ).data.undoStatusPointsTransaction;
        return unwrap(result);
    }
}
