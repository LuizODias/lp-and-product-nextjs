import { jwtVerifier } from "auth0-access-token-jwt";
import axios from "axios";

const options = {
    method: "POST",
    url: `${process.env["PLATFORM_BASE_URL"]}/api/auth/token`,
    headers: {
        "content-type": "application/json",
    },
    data: {
        clientId: process.env["ADMIN_CLIENT_ID"],
        clientSecret: process.env["ADMIN_CLIENT_SECRET"],
    },
};

const getToken = async () => {
    return axios
        .request(options)
        .then(function (response: any) {
            return response.data.token;
        })
        .catch(function (error: any) {
            console.error(error);
        });
};

const verify = jwtVerifier({
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    audience: process.env["PLATFORM_AUDIENCE"],
});

const isValideBackOfficeAuthorization = async (token: string) => {
    const tokenHash = token.replace("Bearer", "").trim();

    try {
        const auth: { [target: string]: any } = await verify(tokenHash);

        const permissions: [string] = auth.payload.permissions;

        if (
            permissions
                .filter((el: string) => el === "backoffice")
                .indexOf("backoffice") > -1
        )
            return true;
    } catch (error) {
        console.log(error);
        return false;
    }

    return false;
};

export { isValideBackOfficeAuthorization, getToken };
