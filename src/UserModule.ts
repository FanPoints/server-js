import FanPointsClient from './FanPointsClient';
import { unwrap } from './utils/errors';

/**
 * This class allows you manage users in your loyalty program. A user corresponds to
 * a person who can participate in your loyalty program (e.g. earn and spend
 * points).
 */
export class UserModule {
    /** @hidden */
    constructor(private client: FanPointsClient) {}

    /**
     * Adds a user to your loyalty program. A user corresponds to a person
     * who can participate in your FanPoints loyalty program (e.g. earn and
     * spend points).
     *
     * The user ID must be unique within your loyalty program.
     * Both the user ID and the email address can be changed later
     * using the {@link changeUserid} and {@link changeMailAddress}
     * methods.
     *
     * @param userId - The ID associated to the user in your system.
     * @param mailAddress - The email address of the user.
     *
     * @throws {@link RequestError} if a user with the given ID already
     * exists (`userAlreadyExistsError`), the userId is invalid
     * (`invalidUserIdError`) or the email address is invalid
     * (`invalidMailAddressError`).
     */
    public async addUser(userId: string, mailAddress: string) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.addUser({
            projectId: loyaltyProgramId,
            userId,
            mailAddress,
        });
        return unwrap(result.data.addUser);
    }

    /**
     * Changes the user ID of a user in your loyalty program.
     *
     * The new user ID must be unique within your loyalty program.
     * The data connected to the user (e.g. points, transactions) will
     * be preserved.
     *
     * @param oldUserId - The current user ID of the user.
     * @param newUserId - The new user ID of the user.
     *
     * @throws {@link RequestError} if the old user does not exist
     * (`unknownUserError`), the new user ID is invalid (`invalidUserIdError`)
     * or the new user ID is already taken (`userAlreadyExistsError`).
     */
    public async changeUserId(oldUserId: string, newUserId: string) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.changeUserId({
            projectId: loyaltyProgramId,
            oldUserId,
            newUserId,
        });
        return unwrap(result.data.changeUserId);
    }

    /**
     * Changes the email address of a user in your loyalty program.
     *
     * @param userId - The user ID of the user.
     * @param mailAddress - The new email address of the user.
     *
     * @throws {@link RequestError} if the user does not exist
     * (`unknownUserError`) or the email address is invalid
     * (`invalidMailAdressError`).
     */
    public async changeMailAddress(userId: string, newMailAddress: string) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.changeUserMailAddress({
            projectId: loyaltyProgramId,
            userId,
            newMailAddress,
        });
        return unwrap(result.data.changeUserMailAddress);
    }

    /**
     * Deletes a user from your loyalty program.
     *
     * @param userId - The user ID of the user.
     *
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`).
     */
    public async deleteUser(userId: string) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.deleteUser({
            projectId: loyaltyProgramId,
            userId,
        });
        return unwrap(result.data.deleteUser);
    }

    /**
     * Retrieves information on a user from your loyalty program.
     *
     * @param userId - The user ID of the user.
     *
     * @returns an object containing the user's ID and email address.
     * @throws {@link RequestError} if the user does not exist (`unknownUserError`).
     */
    public async getUser(userId: string) {
        const { sdk, loyaltyProgramId } = this.client.getLoyaltyProgram();
        const result = await sdk.getUserById({
            projectId: loyaltyProgramId,
            userId,
        });
        return unwrap(result.data.getUserById);
    }
}
