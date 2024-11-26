import { users } from '../../users';
import { getSession } from '@auth0/nextjs-auth0';

export default async function handler(req: any, res: any) {
    const requestMethod = req.method;
    const userSession = await getSession(req, res);

    if (!userSession?.user.sub) return res.status(400).send("Invalid request!!");

    switch (requestMethod) {
        case 'GET':
            const Users = await users();
            let [status, respGetUser] = await Users.getUserApplications(userSession.user.sub);

            return status == 'error'
                ? res.status(400).json('Invalid user subscription')
                : res.status(200).json(respGetUser);
        default:
            return res.status(400).send("Invalid request!!");
    }
};
