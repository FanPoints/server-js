import {
    AddUserResult,
    ChangeUserIdResult,
    ChangeUserMailAddressResult,
    DeleteUserResult,
    GetUserResult,
    Sdk,
} from './queries/generated/sdk';

export {
    AddUserResult,
    ChangeUserIdResult,
    GetUserResult,
    ChangeUserMailAddressResult,
    DeleteUserResult,
} from './queries/generated/sdk';

/**
 * This class allows you manage users in your FanPoints project. A user corresponds to
 * a person who can participate in your FanPoints project (e.g. earn and spend
 * points).
 */
export class UserModule {
    /** @hidden */
    constructor(
        private projectId: string,
        private graphqlSDK: Sdk,
    ) {}

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
    public async addUser(
        userId: string,
        mailAddress: string,
    ): Promise<AddUserResult> {
        const result = await this.graphqlSDK.add_user({
            project_id: this.projectId,
            user_id: userId,
            mail_address: mailAddress,
        });
        return result.data.add_user;
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
    public async changeUserId(
        oldUserId: string,
        newUserId: string,
    ): Promise<ChangeUserIdResult> {
        const result = await this.graphqlSDK.change_user_id({
            project_id: this.projectId,
            old_user_id: oldUserId,
            new_user_id: newUserId,
        });
        return result.data.change_user_id;
    }

    /**
     * Changes the email address of a user in your FanPoints project.
     *
     * @param userId - The user ID of the user.
     * @param mailAddress - The new email address of the user.
     */
    public async changeMailAddress(
        userId: string,
        mailAddress: string,
    ): Promise<ChangeUserMailAddressResult> {
        const result = await this.graphqlSDK.change_user_mail_address({
            project_id: this.projectId,
            user_id: userId,
            new_mail_address: mailAddress,
        });
        return result.data.change_user_mail_address;
    }

    /**
     * Deletes a user from your FanPoints project.
     *
     * @param userId - The user ID of the user.
     */
    public async deleteUser(userId: string): Promise<DeleteUserResult> {
        const result = await this.graphqlSDK.delete_user({
            project_id: this.projectId,
            user_id: userId,
        });
        return result.data.delete_user;
    }

    /**
     * Retrieves information on a user from your FanPoints project.
     *
     * @param userId - The user ID of the user.
     */
    public async getUser(userId: string): Promise<GetUserResult> {
        const result = await this.graphqlSDK.get_user_by_id({
            project_id: this.projectId,
            user_id: userId,
        });
        return result.data.get_user_by_id;
    }
}
