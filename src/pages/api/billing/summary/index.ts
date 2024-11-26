import { billing } from "..";

export default async function handler(req: any, res: any) {
    const requestMethod = req.method;
    const Billing = await billing();

    switch (requestMethod) {
		case 'POST':
			if (!req.body) return res.status(400).send("Body missing params!!");
			
			const start = new Date(req.body.start);
			const end = new Date(req.body.end);

			if(end < start || end.getMonth() == start.getMonth()) return res.status(400).send("Invalid request!!");

          	const [statusGetBilling, respGetBilling] = await Billing.sendRequest("POST", `usage-summary`, req.body);

          	return statusGetBilling == 'error'
              	? res.status(400).send('The client does not exist')
              	: res.status(200).json(respGetBilling);
	
          	default:
			  	return res.status(400).send("Invalid request!!");
    }
};