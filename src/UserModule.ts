import FanPointsClient from './FanPointsClient';
import { Sdk } from './queries/generated/sdk';
import { unwrap } from './utils/errors';

/**
 * This class allows you manage users in your FanPoints project. A user corresponds to
 * a person who can participate in your FanPoints project (e.g. earn and spend
 * points).
 */
export class UserModule {
    private sdk: Sdk;
    private loyaltyProgramId: string;

    /** @hidden */
    constructor(client: FanPointsClient) {
        const { sdk, loyaltyProgramId } = client.getLoyaltyProgram();
        this.sdk = sdk;
        this.loyaltyProgramId = loyaltyProgramId;
    }

    /**
     * Adds a user to your FanPoints project. A user corresponds to a person
     * who can participate in your FanPoints project (e.g. earn and spend
     * points).
     *
     * @remarks
     * The user ID must be unique within your FanPoints project.
     * Both the user ID and the email address can be changed later
     * using the {@link changeUserid} and {@link changeMailAddress}
     * methods.
     *
     * @param userId - The ID associated to the user in your system.
     * @param mailAddress - The email address of the user.
     */
    public async addUser(userId: string, mailAddress: string) {
        const result = await this.sdk.addUser({
            projectId: this.loyaltyProgramId,
            userId,
            mailAddress,
        });
        return unwrap(result.data.addUser);
    }

    /**
     * Changes the user ID of a user in your FanPoints project.
     *
     * @remarks
     * The new user ID must be unique within your FanPoints project.
     * The data connected to the user (e.g. points, transactions) will
     * be preserved.
     *
     * @param oldUserId - The current user ID of the user.
     * @param newUserId - The new user ID of the user.
     */
    public async changeUserId(oldUserId: string, newUserId: string) {
        const result = await this.sdk.changeUserId({
            projectId: this.loyaltyProgramId,
            oldUserId,
            newUserId,
        });
        return unwrap(result.data.changeUserId);
    }

    /**
     * Changes the email address of a user in your FanPoints project.
     *
     * @param userId - The user ID of the user.
     * @param mailAddress - The new email address of the user.
     */
    public async changeMailAddress(userId: string, newMailAddress: string) {
        const result = await this.sdk.changeUserMailAddress({
            projectId: this.loyaltyProgramId,
            userId,
            newMailAddress,
        });
        return unwrap(result.data.changeUserMailAddress);
    }

    /**
     * Deletes a user from your FanPoints project.
     *
     * @param userId - The user ID of the user.
     */
    public async deleteUser(userId: string) {
        const result = await this.sdk.deleteUser({
            projectId: this.loyaltyProgramId,
            userId,
        });
        return unwrap(result.data.deleteUser);
    }

    /**
     * Retrieves information on a user from your FanPoints project.
     *
     * @param userId - The user ID of the user.
     */
    public async getUser(userId: string) {
        const result = await this.sdk.getUserById({
            projectId: this.loyaltyProgramId,
            userId,
        });
        return unwrap(result.data.getUserById);
    }
}
