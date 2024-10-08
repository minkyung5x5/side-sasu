"use client"

import { useEffect, useRef, useState } from 'react';
import { Avatar, Card } from 'antd';
import Icon from '@ant-design/icons';
import Search from 'antd/es/input/Search';
import { Messages } from '@/type/Messages';
import { postToClova } from '@/apiClient/apiClient';
import OnboarderIcon from "../img/OnboarderIcon.svg";
import Image from 'next/image';
import Setting from './setting';

const Chat = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [messages, setMessages] = useState<Messages[]>([{ role: 'assistant', content: "안녕하세요! '온보더'입니다. \n온보딩을 함께하기 위해서 '이름'과 '직무'를 알려주세요!" }]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handlePostToClova = async (newMessages: Messages[]): Promise<Messages> => {
        try {
            const message = await postToClova(newMessages)
            return message;
        } catch (error) {
            console.error('Error fetching bot response:', error);
            return { role: 'assistant', content: 'Error fetching response. Please try again.' };
        }
    };

    const handleSubmit = async (value: string) => {
        if (!inputValue.trim()) return;
        const newMessages: Messages[] = [...messages, { role: 'user', content: inputValue }];
        setMessages([...newMessages, { role: 'assistant', content: '...' }]);
        setInputValue('');

        const botMessage = await handlePostToClova(newMessages);
        setMessages((prevMessages) => [
            ...prevMessages.slice(0, -1),
            botMessage,
        ]);
    };

    return (
        <div className="relative w-full md:max-w-4xl flex flex-col bg-indigo-50">
            <div className="h-20 p-4 border-b-2 border-indigo-300 flex items-center justify-between">
                <div className="text-xl font-bold text-indigo-600">{'Onboarder'}</div>
                <Setting />
            </div>

            <div className="flex-1 overflow-y-auto p-4" ref={scrollRef}>
                {messages.map((item, index) => (
                    <Card key={index} size="small" className={`mb-2 w-fit ${item.role === 'user' ? 'ml-auto' : 'mr-auto'}`}>
                        <div className={`mr-auto flex space-x-2 ${item.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                            {item.role === 'user' && (
                                <Avatar className="shrink-0" size="small" src={`https://api.dicebear.com/7.x/miniavs/svg?seed=5`} />
                            )}
                            {item.role === 'assistant' && (
                                <Icon className="shrink-0" component={() => (<Image className="w-6 mb-auto" src={OnboarderIcon} alt="logo" />)} />
                            )}
                            <div className='whitespace-pre-wrap'>{item.content}</div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="h-max p-4">
                <Search
                    placeholder="메시지를 입력해주세요"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onSearch={(value) => handleSubmit(value)}
                    enterButton="보내기"
                />

            </div>
        </div>
    );
};

export default Chat;
