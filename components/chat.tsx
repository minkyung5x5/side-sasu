"use client"
import { useState } from 'react';
import { Input, Button, List } from 'antd';

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
            <div className="h-full overflow-y-auto flex flex-col justify-between max-w-screen-md mx-auto p-4">
                <div className="overflow-y-auto">
                    <List
                        itemLayout="horizontal"
                        dataSource={messages}
                        renderItem={(item) => (
                            <List.Item className={`text-${item.sender === 'user' ? 'right' : 'left'}`}>
                                <List.Item.Meta
                                    title={item.sender === 'user' ? 'You' : 'Other'}
                                    description={item.text}
                                />
                            </List.Item>
                        )}
                    />
                </div>
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
