'use server'

const CLOVA_API_URL = process.env.CLOVA_API_URL || '';
const CLOVA_API_PRJ = process.env.CLOVA_API_PRJ || '';
const CLOVA_API_KEY = process.env.CLOVA_API_KEY || '';

export async function POST(request: Request) {
    try {
        const req = await request.json();
        const headers = {
            'Content-Type': 'application/json; charset=utf-8',
            'project': CLOVA_API_PRJ,
            'apiKey': CLOVA_API_KEY,
        };
        const response = await fetch(CLOVA_API_URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(req),
        });
        console.log(headers, response)
        if (!response.ok) {
            throw new Error(`Failed to write data to CLOVA API: ${response.statusText}`);
        }

        const data = await response.json();
        return Response.json(data)

    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data from API');
    }
}