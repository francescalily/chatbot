import React, {useState} from 'react'
import '/node_modules/@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageSeparator, MessageList, Message, Avatar, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'
import './styles.css'
import avatarIco from '../../assets/timeLogo.png'
import userAvatarIco from '../../assets/userAvatarIco.png'
import Buttons from './buttons';
function ChatBotTwo() {

    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState([{
        message: "Hi I'm your Times Travel Chatbot, I can help with inspiration on where to take your next holiday, anything you need to help plan a trip and can also show you some Times Travel offers to suit your needs. \n \n How can I help? You can enter some text or choose from the options below?",
        sender: "Travel Bot",
    }]);
    const [showButton, setShowButton] = useState(true)
    const [isDrawerShowing, setDrawerShowing] = useState(false);

    const handleToggleDrawer = () => {
        setDrawerShowing(!isDrawerShowing);
      };

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
            return {
                role: messageObject.sender === "user" ? "user" : "assistant",
                content: messageObject.message
            };
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
const handleButtonClicked = async (question) => {
    const newMessage = {
        message: question,
            sender: "user",
            direction: "outgoing"
    }
    setMessages([...messages, newMessage]);
    setTyping(true);
    await processMessage([...messages, newMessage]);
        setShowButton(!showButton);
        console.log(question)
  };
    


    
  return (
    <>
    <div className="mainDiv" style={{ display: "flex", position: "relative", height: "650px", width: "500px"}}>
        <MainContainer >
            <ChatContainer>
            

            
            <MessageList scrollBehavior='smooth' typingIndicator={typing ? <TypingIndicator content="Times Travel BOT is typing" /> : null }>
    {messages.map((message, i) => {
        return (
            <React.Fragment key={i}>
                
                <div className="message-container">
                    {message.sender === 'Travel Bot' ? (
                        <Avatar className="message-avatar-right" src={avatarIco} name={"AI"} size="sm" />
                    ) : (
                        null
                    )}
                    <Message model={message} />
                </div>
            </React.Fragment>
        );
    })}
    {showButton && <Buttons onButtonClicked={handleButtonClicked}/>}
</MessageList>



                <MessageInput placeholder='Type your response...' onSend={handleSend}/>
            </ChatContainer>
            
        </MainContainer>
    </div>
    </>
  )
}

export default ChatBotTwo