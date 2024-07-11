"use client"

import { useEffect, useRef, useState } from 'react';
import { Input, Button, List, Avatar, Card } from 'antd';

const initialMessages = [
    { id: 1, text: 'Hello!', sender: 'user' },
    { id: 2, text: 'Hi there!', sender: 'other' },
    { id: 3, text: 'How are you?', sender: 'user' },
    { id: 4, text: 'I am good, thanks!' + '\n' +'hihi', sender: 'other' },
    { id: 5, text: 'Hello!', sender: 'user' },
    { id: 6, text: 'Hi there!', sender: 'other' },
];

const Chat = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [messages, setMessages] = useState(initialMessages);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }, [messages]);
      
    const handleMessageSend = () => {
        if (inputValue.trim() === '') return;
        const newMessage = {
            id: messages.length + 1,
            text: inputValue,
            sender: 'user',
        };
        setMessages([...messages, newMessage]);
        setInputValue('');
    };

    return (
        <div className="relative w-full flex flex-col border-r-2 border-indigo-600">
            <div className="h-20 p-4 border-b-2 border-indigo-300 flex items-center">
                <div className="text-xl font-bold">Onboarding</div>
            </div>

            <div className="flex-1 overflow-y-auto p-4" ref={scrollRef}>
                {messages.map((item, index) => (
                    <Card key={index} size="small" className={`mb-2 w-max ${item.sender === 'user' ? 'ml-auto' : 'mr-auto'}`}>
                        <div className={`mr-auto flex space-x-2 ${item.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                            <Avatar size="small" src={`https://api.dicebear.com/7.x/miniavs/svg?seed=3`} />
                            <div>{item.text}</div>
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
                        onPressEnter={handleMessageSend}
                    />
                    <Button type="primary" onClick={handleMessageSend}>
                        Send
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default Chat;
