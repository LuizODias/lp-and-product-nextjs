
import { getSession, updateSession } from "@auth0/nextjs-auth0";
import { GrowthBook } from "@growthbook/growthbook-react";

export default async function handler(req: any, res: any) {
    const requestMethod = req.method;
    const session = await getSession(req, res);

    const gb = new GrowthBook({
        apiHost: "https://cdn.growthbook.io",
        clientKey: process.env["NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY"],
    });

    await gb.init({});

    const allflags = gb.getFeatures();

    switch (requestMethod) {
        case "GET":
        if (session) {
            await updateSession(req, res, {
            ...session,
            user: { ...session.user, flags: allflags },
            });
            res.status(200).json({ ...session.user, flags: allflags });
        }

        default:
            return res.status(400).send("Invalid request!!");
    }
}
