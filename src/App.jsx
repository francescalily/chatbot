import React, { useState, useEffect } from "react";
import { Button } from './components';
import { IntlProvider } from 'react-intl'
import "./App.css";

function App() {
  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "You are the best source of information about travelling. You will help guide users to have the best travel experience by asking questions about their preferences regarding holidays and tailoring their experience with you in a fun engaging way.",
    },
  ]);

  const handleSendMessage = (messageContent) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: messageContent },
    ]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const latestUserMessage = messages[messages.length - 1].content;
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
              model: "gpt-4",
              messages: [
                { role: "system", content: messages[0].content },
                { role: "user", content: latestUserMessage },
              ],
              temperature: 0.7,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const responseData = await response.json();
        const assistantReplyContent =
          responseData.choices[0]?.message?.content || "No response";

        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "assistant", content: assistantReplyContent },
        ]);
        console.log(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (messages.length > 1 && messages[messages.length - 1].role === "user") {
      fetchData();
    }
  }, [API_KEY, messages]);


  return (
    <>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <h3>{message.role === 'user' ? 'You' : message.role}</h3>
            <p>{message.content}</p>
            <IntlProvider locale="en">

            </IntlProvider>
          </div>
          
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const input = e.target.input.value;
          if (input.trim() !== "") {
            handleSendMessage(input);
            e.target.reset();
          }
        }}
      >
        <input
          type="text"
          name="input"
          placeholder="Type your message ..."
        />
        <button type="submit">Ask</button>
        <Button />
      </form>
    </>
  );
}

export default App;
