"use client"
import { useState } from 'react';
import { Input, Button, List, Avatar, Card } from 'antd';

// 가짜 데이터 (임시로 사용)
const initialMessages = [
    { id: 1, text: 'Hello!', sender: 'user' },
    { id: 2, text: 'Hi there!', sender: 'other' },
    { id: 3, text: 'How are you?', sender: 'user' },
    { id: 4, text: 'I am good, thanks!', sender: 'other' },
    { id: 5, text: 'Hello!', sender: 'user' },
    { id: 6, text: 'Hi there!', sender: 'other' },
];

const Chat = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [inputValue, setInputValue] = useState('');

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
        <div className="w-1/2 border-r-2 border-indigo-600">
            <div className="h-20 p-4 border-b-2 border-indigo-300 flex items-center">
                <div className="text-xl font-bold">Onboarding</div>
            </div>

            {/* <div className="h-full overflow-y-auto flex flex-col justify-between max-w-screen-md mx-auto p-4"> */}
            <div className="h-full p-4">
                {messages.map((item, index) => (

                    <Card key={item.id} size="small">
                        <div className='flex flex-row-reverse'>
                            <Avatar size="small" src={`https://api.dicebear.com/7.x/miniavs/svg?seed=1`} />
                            <div>{item.text}</div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="fixed w-1/2 bottom-0 left-0 p-4">
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
