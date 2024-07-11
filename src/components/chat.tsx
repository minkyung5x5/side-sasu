"use client"

import { useEffect, useRef, useState } from 'react';
import { Input, Button, List, Avatar, Card } from 'antd';
import { sendMessage } from '@/app/api/clovastudio/route';

interface Message {
    role: 'user' | 'assistant';
    content: string;
  }

const Chat = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
        console.log(messages)
    }, [messages]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!inputValue.trim()) return;
    
        const userMessage = inputValue;
        const newMessages: Message[] = [...messages, { role: 'user', content: inputValue }]
        setMessages([...newMessages, {role: 'assistant', content: '...'}]);
        setInputValue('');
    
        try {
          const response = await sendMessage(newMessages);
          const botMessage = response.choices[0].message;
          setMessages((prevMessages) => [
            ...prevMessages.slice(0, -1),
            botMessage,
          ]);
        } catch (error) {
          console.error('Error fetching bot response:', error);
          setMessages((prevMessages) => [
            ...prevMessages.slice(0, -1),
            { role: 'assistant', content: 'Error fetching response. Please try again.' },
          ]);
        }
      };

    return (
        <div className="relative w-full flex flex-col border-r-2 border-indigo-600">
            <div className="h-20 p-4 border-b-2 border-indigo-300 flex items-center">
                <div className="text-xl font-bold">Onboarding</div>
            </div>

            <div className="flex-1 overflow-y-auto p-4" ref={scrollRef}>
                {messages.map((item, index) => (
                    <Card key={index} size="small" className={`mb-2 w-max ${item.role === 'user' ? 'ml-auto' : 'mr-auto'}`}>
                        <div className={`mr-auto flex space-x-2 ${item.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                            <Avatar size="small" src={`https://api.dicebear.com/7.x/miniavs/svg?seed=3`} />
                            <div>{item.content}</div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="h-max p-4">
                <div className='flex items-center justify-center space-x-2'>
                    <Input
                        placeholder="Type your message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onPressEnter={handleSubmit}
                    />
                    <Button type="primary" onClick={handleSubmit}>
                        Send
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default Chat;
