'use client'

import React, { useState } from 'react';

const ChatPage: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);

    const handleSendMessage = (message: string) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    return (
        <div>
            <div className="chat-window">
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        {message}
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input type="text" placeholder="Type your message..." />
                <button onClick={() => handleSendMessage('Hello!')}>Send</button>
            </div>
        </div>
    );
};

export default ChatPage;
