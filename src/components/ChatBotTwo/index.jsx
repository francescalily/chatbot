import React, {useState} from 'react'

import '/node_modules/@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'
import './styles.css'
function ChatBotTwo() {

    const [typing, setTyping] = useState(false);
    const [showButton, setShowButton] = useState(true)
    const [messages, setMessages] = useState([{
        message: "Hello, welcome to Times Travel - how may I assist your booking today",
        sender: "Travel Bot"
    }]);

    const buttons = [
        { prompt: 'City Break' },
        { prompt: 'Beach Getaway' },
        { prompt: 'Adventure' },
        { prompt: 'Surpise me' },
    ]

    const toggleButton = () => {
        setShowButton(!showButton)
    }

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing"
        }

        const newMessages = [...messages, newMessage];
        setMessages(newMessages)

    
        setTyping(true);

        await processMessage(newMessages);
    }

    async function processMessage(chatMessages) {
        let apiMessages  = chatMessages.map((messageObject) => {
            let role = "";
            if(messageObject.sender === "Travel Bot") {
                role = "assistant";
            } else {
                role = "user";
            }
            return {role: role, content: messageObject.message}
        })

        const systemPrompt = {
            role: "system",
            content: "Speak like a travel agent advising users on where to go on holiday. You really try to get to know the user by asking them questions about where they want to go to find the perfect destination. Send links to the websites they should visit in bold letters to book a holiday" 
        }

        const apiRequestBody = {
            "model" : "ft:gpt-3.5-turbo-0613:personal::8lKKP7vi",
            "messages" : [
                systemPrompt,
                ...apiMessages
            ]
        }

        await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody)

        
    }).then((data) => {
        return data.json();
    }).then((data) => {
        console.log(data)
        const res = data.choices[0].message.content;
        console.log(res)
        setMessages( [...chatMessages, {
            message: data.choices[0].message.content,
            sender: 'Travel Bot'
        }]) 
        setTyping(false);
        console.error('Unexpected response structure:', data);
    })
}
    
      

     

    

  return (
    <div style={{ position: "relative", height: "650px", width: "500px"}}>
        <MainContainer>
            <ChatContainer>
                <MessageList scrollBehavior='smooth' typingIndicator={typing ? <TypingIndicator content="Times Travel BOT is typing" /> : null }>
                    {messages.map((message, i) => {
                        return <Message key={i} model={message} />
                    })}
                    <div className='prompt__buttons'>
                        { showButton && buttons.map((button, index) => (
                            <button onClick={toggleButton} key={index}>{button.prompt}</button>
                        ))}
                    </div>
                   
                </MessageList>
                <MessageInput placeholder='Ask question here...' onSend={handleSend}/>
            </ChatContainer>
        </MainContainer>
    </div>
  )
}

export default ChatBotTwo