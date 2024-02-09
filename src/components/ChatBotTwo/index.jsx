import React, {useState} from 'react'

import '/node_modules/@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'

function ChatBotTwo() {
    const [messages, setMessages] = useState([{
        message: "Hello, welcome to Times Travel - how may I assist your booking today",
        sender: "ChatGPT"
    }]);
    

  return (
    <div style={{ position: "relative", height: "650px", width: "500px"}}>
        <MainContainer>
            <ChatContainer>
                <MessageList>
                    {messages.map((message, i) => {
                        return <Message key={i} model={message} />
                    })}
                </MessageList>
                <MessageInput placeholder='Ask question here...'/>
            </ChatContainer>
        </MainContainer>
    </div>
  )
}

export default ChatBotTwo