import { users } from '../../users';
import { getSession } from '@auth0/nextjs-auth0';

export default async function handler(req: any, res: any) {
    const requestMethod = req.method;
    const userSession = await getSession(req, res);

    if (!userSession?.user.sub) return res.status(400).send("Invalid request!!");

    switch (requestMethod) {
        case 'POST':
            if (!req.body || !req.body.userSub || !req.body.applicationId) return res.status(400).send("Body missing params");

            const Users = await users();
            const [status, resp] = await Users.connectApplication(userSession.user.sub, req.body.applicationId);

            return status == 'error'
                ? res.status(400).send('Connection not is possible')
                : res.status(200).json(resp);
        default:
            return res.status(400).send("Invalid request!!");
    }
};