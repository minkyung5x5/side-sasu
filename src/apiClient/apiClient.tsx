import { Messages } from "@/type/Messages";

const CLOVA_API_URL = '/api/clova';
const CLOVA_HASH='c06fc3a100c5d48e5b704639f509078cc0e0ea7fa2209c0bb3971a5ae1b60975'

export const postToClova = async (values: Messages[]): Promise<Messages> => {
    return await clovaApiClient('POST', values);
};

export const clovaApiClient = async (method: string, messages: Messages[]): Promise<Messages> => {
    const bodyData = {
        hash: CLOVA_HASH,
        params: {
            company: '원티드',
        },
        messages,
    };

    const options: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(bodyData)
    };

    const res: Response = await fetch(CLOVA_API_URL, options);
    const resData = await res.json();
    const resMessage = resData.choices[0].message;
    return resMessage
};
