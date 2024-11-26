import axios from 'axios';
import Token from '../../token';
import { JsonStringify } from "@/shared/types/projectTypes"

export async function applications() {
    const domain = `${process.env['AUTH0_ISSUER_BASE_URL']}/api`;
    const token = await Token.getToken();

    const send_request = async (method: 'GET' | 'POST' | 'PATCH' | 'DELETE', params: string, data?: JsonStringify) => {
        let options: any = {
            method: method,
            maxBodyLength: Infinity,
            url: `${domain}/${params}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data
        };

        return axios.request(options).then((response) => {
            return ['ok', response.data];
        }).catch((error: any) => {
            return ['error', error];
        });
    };

    const getApplication = async (clientId: string) => {
        return send_request('GET', `v2/clients/${clientId}`);
    };

    const updateApplication = (clientId: string, attributes: { [target: string]: any }) => {
        return send_request('PATCH', `v2/clients/${clientId}`, JSON.stringify({ ...attributes }));
    };

    const setGrants = async (clientId: string, user: { [target: string]: any }) => {

        let data = {
            client_id: clientId,
            audience: process.env['PLATFORM_AUDIENCE'],
            scope: user.app_metadata.scope
        };

        return send_request('POST', 'v2/client-grants', JSON.stringify(data));
    }

    const createApplication = async (user: { [target: string]: any }, name: string, description: string, email: string) => {
        if (!user.app_metadata.licensed) {
            return ['error', 'User not Licensed']
        }

        const client = {
            name: name,
            description: description,
            app_type: "non_interactive",
            grant_types: ['client_credentials'],
            client_metadata: {
                'company-email': email,
                'quota-amount': `${user.app_metadata.quotaAmount}`,
                'reset-quota': 'Never',
                'subscription-type': 'Full',
                'user-subscription': user.user_id,
                'companyRegistrationNumber': `${user.app_metadata.companyRegistrationNumber}`
            }
        }

        return send_request('POST', `v2/clients`, JSON.stringify(client));

    }

    const deleteApplication = async (clientId: string) => {
        return send_request('DELETE', `v2/clients/${clientId}`);
    }

    return { getApplication, updateApplication, createApplication, deleteApplication, setGrants };
};
