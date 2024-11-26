import axios from 'axios';

const domain = `${process.env['VAULT_BASE_URL']}`;

const getToken = async () => {
    const data = {
        role_id: `${process.env['VAULT_ROLE_ID']}`,
        secret_id: `${process.env['VAULT_SECRET_ID']}`
    }

    let options: any = {
        method: 'POST',
        maxBodyLength: Infinity,
        url: `${domain}/v1/auth/approle/login`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: JSON.stringify(data)
    };

    return axios.request(options).then((response) => {
        return ['ok', response.data];
    }).catch((error: any) => {
        return ['error', error];
    });
}

export default { getToken }
