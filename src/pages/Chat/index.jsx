import React, {useState} from "react";

import {Message, Input, History, Clear} from "../../components"
import "./styles.css"

export default function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState([]);

  return (
    <div className="App">
      <div className="Coloumn">
        <h3 className="Title">Chat Messages</h3>
      </div>
    </div>
  )
}