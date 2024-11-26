import { applications } from './applications';
import { users } from '../users/users';
import { getSession } from '@auth0/nextjs-auth0';

export default async function handler(req: any, res: any) {
    const requestMethod = req.method;
    const userSession = await getSession(req, res);

    if (!userSession?.user.sub) return res.status(400).send("Invalid request!!");

    switch (requestMethod) {
        case 'POST':
            if (!req.body || !req.body.userSub || !req.body.name || !req.body.email) return res.status(400).send("Body missing params");

            const Applications = await applications();

            const Users = await users();
            const [statusUser, user] = await Users.getUser(userSession.user.sub);

            if (statusUser == 'error') return ['error', 'invalid user subscription'];

            // TODO remove this condition when are possible create more then 1(one) credential per client
            if (user.app_metadata.applications && user.app_metadata.applications.length > 0) {
                return res.status(400).send(`There is an credential created`);
            }

            const [statusCreateApplication, respCreateApplication] = await Applications.createApplication(user, req.body.name, req.body.description, req.body.email);

            if (statusCreateApplication == 'error') {
                return res.status(400).send(`Application not created`);
            }

            res.status(200).json(respCreateApplication);

        default:
            return res.status(400).send("Invalid request!!");
    }
};