'use server'

import axios from 'axios';
interface Message {
    role: 'user' | 'assistant';
    content: string;
  }

const CLOVASTUDIO_API_URL = 'https://api-laas.wanted.co.kr/api/preset/chat/completions';
const CLOVASTUDIO_API_KEY = '769d77733347efe67fa68cc117faeeaf94576566be30063ee3e9f25463db70ad';

export async function sendMessage(messages: Message[]) {
    try {
        const response = await axios.post(CLOVASTUDIO_API_URL, {
            hash: 'c06fc3a100c5d48e5b704639f509078cc0e0ea7fa2209c0bb3971a5ae1b60975',
            params: {
                company: '원티드',
            },
            messages,
        }, {
            headers: {
                project: 'PROMPTHON_PRJ_435',
                apiKey: CLOVASTUDIO_API_KEY,
                'Content-Type': 'application/json; charset=utf-8',
            },
        });
        console.log(response.data)
        console.log(response.data.choices[0].message)
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data from API');
    }
}