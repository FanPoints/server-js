import { Sdk } from './queries/generated/sdk';

/**
 * This class allows you manage users in your FanPoints project.
 */
export default class UserModule {
    constructor(
        private projectId: string,
        private graphqlSDK: Sdk,
    ) {}

    public async addUser(userId: string, mailAddress: string) {
        const result = await this.graphqlSDK.add_user({
            project_id: this.projectId,
            user_id: userId,
            mail_address: mailAddress,
        });
        return result.data.add_user;
    }

    public async changeUserid(oldUserId: string, newUserId: string) {
        const result = await this.graphqlSDK.change_user_id({
            project_id: this.projectId,
            old_user_id: oldUserId,
            new_user_id: newUserId,
        });
        return result.data.change_user_id;
    }

    public async changeMailAddress(userId: string, mailAddress: string) {
        const result = await this.graphqlSDK.change_user_mail_address({
            project_id: this.projectId,
            user_id: userId,
            new_mail_address: mailAddress,
        });
        return result.data.change_user_mail_address;
    }

    public async deleteUser(userId: string) {
        const result = await this.graphqlSDK.delete_user({
            project_id: this.projectId,
            user_id: userId,
        });
        return result.data.delete_user;
    }

    public async getUser(userId: string) {
        const result = await this.graphqlSDK.get_user_by_id({
            project_id: this.projectId,
            user_id: userId,
        });
        return result.data.get_user_by_id;
    }
}
