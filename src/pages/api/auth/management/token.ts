import axios from 'axios';

const options = {
    method: 'POST',
    url: `${process.env['AUTH0_ISSUER_BASE_URL']}/oauth/token`,
    headers: {
        'content-type': 'application/json'
    },
    data: {
        client_id: process.env['AUTH0_MANAGEMENT_CLIENT_ID'],
        client_secret: process.env['AUTH0_MANAGEMENT_CLIENT_SECRET'],
        audience: `${process.env['AUTH0_ISSUER_BASE_URL']}/api/v2/`,
        grant_type: 'client_credentials'
    }
};

const getToken = async () => {
    return axios.request(options).then(function (response: any) {
        return response.data.access_token
    }).catch(function (error: any) {
        console.error(error);
    });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getToken }
