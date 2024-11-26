import { users } from '../../users/users';
import { applications } from '../applications';
import { getSession } from '@auth0/nextjs-auth0';

export default async function handler(req: any, res: any) {
    const requestMethod = req.method;
    const userSession = await getSession(req, res);

    if (!userSession?.user.sub) return res.status(400).send("Invalid request!!");

    switch (requestMethod) {
        case 'POST':
            const Applications = await applications()
            if (!req.body || !req.body.clientId) return res.status(400).send("Body missing params");

            const Users = await users();
            const [statusUser, user] = await Users.getUser(userSession.user.sub);

            if (statusUser == 'error') return ['error', 'invalid user subscription'];

            const [status, resp] = await Applications.setGrants(req.body.clientId, user);

            return status == 'error'
                ? res.status(400).send("Not is possible set grants")
                : res.status(200).json(resp);

        default:
            return res.status(400).send("Invalid request!!");
    }
};
