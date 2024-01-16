import React, { useState } from "react";
import "./App.css";

function API() {

  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "You are the best source of information about travelling. You will help guide users have the best travel experience by asking questions about their preferences regarding holidays and tailoring their experience with you in a fun engaging way."
    },

  ])
  return <div>Working</div>;
}

export default API;