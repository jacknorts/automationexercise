import { APIRequestContext, expect } from '@playwright/test';
import signupData from '../../test-data/common.json';
import { env } from '../../utils/env';

export class UserAPI {
    readonly request: APIRequestContext;
    private readonly baseUrl: string = 'https://automationexercise.com/';

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async createUser(data: typeof signupData) {
        const payload = {
            name: data.signupData.name,
            email: data.signupData.email,
            password: data.signupData.password,
            title: data.signupData.title,
            birth_date: data.signupData.dob.day,
            birth_month: data.signupData.dob.month,
            birth_year: data.signupData.dob.year,
            firstname: data.signupData.firstName,
            lastname: data.signupData.lastName,
            company: data.signupData.company,
            address1: data.signupData.address,
            address2: data.signupData.address2,
            country: data.signupData.country,
            zipcode: data.signupData.zipcode,
            state: data.signupData.state,
            city: data.signupData.city,
            mobile_number: data.signupData.mobileNumber
        };

        const url = this.baseUrl + 'api/createAccount';

        const params = new URLSearchParams();
        Object.entries(payload).forEach(([k, v]) => params.append(k, String(v ?? '')));

        const response = await this.request.post(url, {
            data: params.toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const text = await response.text();
        // Parse Response
        let body: any;
        try {
            body = JSON.parse(text);
        } catch {
            body = { raw: text };
        }

        // Verify response
        expect(response.status()).toBe(200);
        body = await response.json();
        expect(body.message).toBe('User created!');

        return body;
    }

    async getUserByEmail(email: string) {
        const payload = {
            email: email
        };

        const url = this.baseUrl + 'api/getUserDetailByEmail';

        const params = new URLSearchParams();
        Object.entries(payload).forEach(([k, v]) => params.append(k, String(v ?? '')));

        const response = await this.request.get(url, {
            data: params.toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const text = await response.text();
        // Parse Response
        let body: any;
        try {
            body = JSON.parse(text);
        } catch {
            body = { raw: text };
        }

        // Verify response
        expect(response.status()).toBe(200);
        body = await response.json();
        return body;
    }

    async checkUserExists(email: string) {
        const payload = {
            email: email
        };

        const url = this.baseUrl + 'api/getUserDetailByEmail';

        const params = new URLSearchParams();
        Object.entries(payload).forEach(([k, v]) => params.append(k, String(v ?? '')));

        const response = await this.request.get(url, {
            params: { email }
        });

        const text = await response.text();
        // Parse Response
        let body: any;
        try {
            body = JSON.parse(text);
        } catch {
            body = { raw: text };
        }
        return body.responseCode;
    }

    async deleteUser(email: string, password: string) {
        const payload = {
            email: email,
            password: password
        };

        const url = this.baseUrl + 'api/deleteAccount';

        const params = new URLSearchParams();
        Object.entries(payload).forEach(([k, v]) => params.append(k, String(v ?? '')));

        const response = await this.request.delete(url, {
            data: params.toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const text = await response.text();
        // Parse Response
        let body: any;
        try {
            body = JSON.parse(text);
        } catch {
            body = { raw: text };
        }

        console.log(body);
        // Verify response
        expect(response.status()).toBe(200);
        body = await response.json();
        expect(body.message).toBe('Account deleted!');

        return body;
    }
}
