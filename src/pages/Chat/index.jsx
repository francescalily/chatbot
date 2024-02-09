import React, { useState } from "react";
import {Message, Input, History, Clear, Prompts} from "../../components"
import "./styles.css";


export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState([]);
  const clear = () => {
    setMessages([]);
    setInput("");
  };

  

  const handleSubmit = async () => {
    const prompt = {
      role: "user",
      content: input,
    };

    setMessages([...messages, prompt]);

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "ft:gpt-3.5-turbo-0613:personal::8lKKP7vi",
        messages: [...messages, prompt, {"role": "system", content: "You are a helpful assistant advising users on where to go on holiday. You really try to get to know the user by asking them questions about where they want to go to find the perfect destination. Send links to the websites they should visit to book a holiday"},]
        ,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        const res = data.choices[0].message.content;
        console.log(res)
        setMessages((messages) => [
          ...messages,
          {
            role: "assistant",
            content: res,
          },
        ]);
        setHistory((history) => [...history, { question: input, answer: res }]);
        setInput("");
        console.error('Unexpected response structure:', data);
      });
      
  };



  return (
    <div className="App">
      <div className="Column">
        <h3 className="Title">Chat Messages</h3>
        <div className="Content">
          {messages.map((el, i) => {
            return <Message key={i} role={el.role} content={el.content} />;
          })}
          <Prompts />
        </div>
        
        <Input
          value={input}
          onChange={(e) => {
            e.preventDefault();
            setInput(e.target.value);
            e.target.value = "";
          }
        }
          onClick={input ? handleSubmit : undefined}
        />
      </div>
      <div className="ColumnHistory">
        
        <h3 className="TitleHistory">History</h3>
        <div className="Content">
          {history.map((el, i) => {
            return (
              <History
                key={i}
                question={el.question}
                onClick={() =>
                  setMessages([
                    { role: "user", content: history[i].question },
                    { role: "assistant", content: history[i].answer },
                  ])
                }
              />
            );
          })}
        </div>
        <Clear onClick={clear} />
      </div>
    </div>
  );
}