import { Messages } from "@/type/Messages";

const CLOVA_API_URL = '/api/clova';
const CLOVA_HASH='eef6d06b0f7e8381fc09775de2372de855fa054242ec402fe1856c6b750664df'

export const postToClova = async (values: Messages[]): Promise<Messages> => {
    return await clovaApiClient('POST', values);
};

export const clovaApiClient = async (method: string, messages: Messages[]): Promise<Messages> => {

    const bodyData = {
        hash: CLOVA_HASH,
        params: JSON.parse(localStorage.getItem('params') || ''),
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
