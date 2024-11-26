import { getToken } from "../auth/backOfficeAuthorization";
import axios from 'axios';
import { JsonStringify } from "@/shared/types/projectTypes"

export async function billing() {
    const domain = `${process.env['PLATFORM_BASE_URL']}/api/billing`;
    const token = await getToken();

    const sendRequest = async (method: 'GET' | 'POST' | 'PATCH' | 'DELETE', params: string, data?: JsonStringify) => {
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

        const resp = await axios.request(options).then((response) => {
            return ['ok', response.data];
        }).catch((error: any) => {
            return ['error', error];
        });
        return resp
    };

    return { sendRequest };
};


