import axios from 'axios';
import Token from '../token';
import { applications } from '../applications/applications';
import { JsonStringify } from "@/shared/types/projectTypes";

export async function users() {
    const domain = `${process.env['AUTH0_ISSUER_BASE_URL']}/api`;
    const token = await Token.getToken();

    const send_request = async (method: 'GET' | 'POST' | 'PATCH', params: string, data?: JsonStringify) => {
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

    const getUser = async (sub: string, q = '') => {
        return send_request('GET', `v2/users/${sub}${q}`);
    };

    const updateUser = (sub: string, attributes: { [target: string]: any }) => {
        return send_request('PATCH', `v2/users/${sub}`, JSON.stringify({ ...attributes }));
    };

    const licensedUser = async (sub: string, companyRegistrationNumber: string, licensed: boolean, scope: ['resale' | 'partner' | 'markertplace'], quotaAmount?: number) => {
        if (licensed && !quotaAmount) return ['error', 'quotaAmount is missing'];
        if (licensed && !companyRegistrationNumber) return ['error', 'quotaAmount is missing'];

        const [status, { email_verified: isEmailVerified }] = await getUser(sub, '?fields=email_verified');

        if (status == 'error') return ['error', 'error on get user'];
        if (!isEmailVerified) return ['error', 'email not verified'];

        return updateUser(sub, {
            app_metadata: {
                licensed,
                companyRegistrationNumber,
                quotaAmount,
                scope
            }
        });
    }

    const connectApplication = async (sub: string, applicationId: string) => {
        const [status, user] = await getUser(sub);

        if (status == 'error') return ['error', 'invalid user subscription']

        const applicationsId = user.app_metadata.applications || [];
        return updateUser(sub, {
            app_metadata: {
                applications: [...applicationsId, applicationId],
            }
        });
    };

    const disconnectApplication = async (sub: string, applicationId: string) => {
        const [status, user] = await getUser(sub);

        if (status == 'error') return ['error', 'invalid user subscription']

        const oldApplicationsId = user.app_metadata.applications || [];
        const newApplicationsId = oldApplicationsId.filter((el: string) => el !== applicationId)

        return updateUser(sub, {
            app_metadata: {
                applications: newApplicationsId,
            }
        });
    };

    const getUserApplications = async (sub: string) => {
        const Applications = await applications()
        const [status, user] = await getUser(sub);

        if (status == 'error') return ['error', 'invalid user subscription']

        if (user.app_metadata.licensed === false) {
            user.app_metadata.applications = []
        }

        const applicationsId = user.app_metadata.applications || [];

        const promissesApplications = applicationsId.map((id: string) => {
            return Applications.getApplication(id);
        })

        const respAll = await Promise.allSettled(promissesApplications)

        let userApplications = respAll.filter((resp: any) => {
            return resp.value[0] != 'error';
        }).map((resp: any) => resp.value[1])

        return ['ok', userApplications]
    };

    return { getUser, updateUser, connectApplication, licensedUser, disconnectApplication, getUserApplications }
};
