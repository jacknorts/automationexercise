import { test, APIRequestContext } from '@playwright/test';
import { UserAPI } from '../apiRequests/userAPI';
import common from '../../test-data/common.json';

export default class UserAPISteps {
    readonly userAPI: UserAPI;

    constructor(request: APIRequestContext) {
        this.userAPI = new UserAPI(request);
    }

    async createUser() {
        await test.step('Create user via API', async () => {
            await this.userAPI.createUser(common);
        });
    }

    async deleteUserIfAlreadyExists() {
        await test.step('Delete user via API if already exists', async () => {
            const email: string = common.signupData.email;
            if (await this.userAPI.checkUserExists(email) === 200) {
                console.log(`User with email ${email} already exists. Deleting user...`);
                const password: string = common.signupData.password;
                await this.userAPI.deleteUser(email, password);
            } else {
                console.log(`User with email ${email} does not exist. No deletion needed.`);
            }
        });
    }
}