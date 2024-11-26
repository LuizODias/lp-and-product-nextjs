import Token from './token';
import { JsonStringify } from "@/shared/types/projectTypes";
import axios from 'axios';

export function vault() {
    const domain = `${process.env['VAULT_BASE_URL']}`;

    const send_request = async (method: 'GET' | 'POST' | 'PATCH', params: string, token: string, data?: JsonStringify) => {
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

    const newSecretKey = async (pathSecretKey: string, secretName: string, data: { [target: string]: any }) => {
        const [status, resp] = await Token.getToken();

        if (status == 'error') return ['error', resp];

        return send_request('POST', `${pathSecretKey}/${secretName}`, resp.auth.client_token, JSON.stringify(data));
    }

    const getSecretKey = async (pathSecretKey: string) => {
        const [status, resp] = await Token.getToken();

        if (status == 'error') return ['error', resp];

        return send_request('GET', `${pathSecretKey}`, resp.auth.client_token);
    }

    return { newSecretKey, getSecretKey };
};
