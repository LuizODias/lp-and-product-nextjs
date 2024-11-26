import { billing } from ".."

export default async function handler(req: any, res: any) {
    const requestMethod = req.method;
    const Billing = await billing();
	
    switch (requestMethod) {
		case 'POST':
			if (!req.body) return res.status(400).send("Body missing params!!");
          	
			const [statusGetBilling, respGetBilling] = await Billing.sendRequest("POST", `monthly-usage`, req.body);

          	return statusGetBilling == 'error'
              	? res.status(400).send('The client does not exist')
              	: res.status(200).json(respGetBilling);

        	default:
          		return res.status(400).send("Invalid request!!");
    }
};