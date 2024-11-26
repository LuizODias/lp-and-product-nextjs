import { users } from '../users';
import { isValideBackOfficeAuthorization } from '../../../backOfficeAuthorization'

export default async function handler(req: any, res: any) {
    const Users = await users();
    const requestMethod = req.method;

    switch (requestMethod) {
        case 'POST':
            if (
                !(await isValideBackOfficeAuthorization(req.headers.authorization))
                || !req.body
                || !req.body.sub
                || typeof req.body.isLicensed !== 'boolean'
                || req.body.quotaAmount && typeof req.body.quotaAmount !== 'number'
                || req.body.scope && !Array.isArray(req.body.scope)
            ) return res.status(400).send("Invalid request!!");

            if (req.body.isLicensed && !req.body.quotaAmount) return res.status(400).send("quotaAmount is missing");
            if (req.body.isLicensed && !req.body.cnpj) return res.status(400).send("cnpj is missing");
            if (req.body.isLicensed && !req.body.scope) return res.status(400).send("scope is missing");

            let [status, resp] = await Users.licensedUser(req.body.sub, req.body.cnpj, req.body.isLicensed, req.body.scope, req.body.quotaAmount);

            return status == 'error'
                ? res.status(400).send(resp)
                : res.status(200).json(resp);

        default:
            return res.status(400).send("Invalid request!!");
    }
};
