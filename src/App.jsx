import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "You are the best source of information about travelling. You will help guide users have the best travel experience by asking questions about their preferences regarding holidays and tailoring their experience with you in a fun engaging way.",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
              model: "gpt-3.5-turbo",
              messages: [
                ...messages,
                { role: "user", content: "This is a test!" },
              ],
              temperature: 0.7,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Error fetching data")
        }
        const responseData = await response.json();
        console.log(responseData)

      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors here
      }
    };

    fetchData();
  }, [API_KEY, messages]);

  return <div>Working</div>;
}

export default App;
