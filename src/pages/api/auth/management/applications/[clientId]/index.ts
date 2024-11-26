import { applications } from '../applications';
import { getSession } from '@auth0/nextjs-auth0';

export default async function handler(req: any, res: any) {
    const requestMethod = req.method;
    const userSession = await getSession(req, res);

    if (!userSession?.user.sub) return res.status(400).send("Invalid request!!");

    const Applications = await applications();

    switch (requestMethod) {
        case 'GET':
            const [statusGetApplication, respGetApplication] = await Applications.getApplication(req.query.clientId);

            return statusGetApplication == 'error'
                ? res.status(400).send('The client does not exist')
                : res.status(200).json(respGetApplication);

        case 'DELETE':
            const [statusDeleteApplication, respDeleteApplication] = await Applications.deleteApplication(req.query.clientId);

            return statusDeleteApplication == 'error'
                ? res.status(400).send(`Application not deleted`)
                : res.status(200).json(respDeleteApplication);

        default:
            return res.status(400).send("Invalid request!!");
    }
};