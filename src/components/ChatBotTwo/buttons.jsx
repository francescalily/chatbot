import React, { useState } from 'react'
import './styles.css'

function Buttons({onButtonClicked}) {

  const [showButton, setShowButton] = useState(true)

  const toggleButton = () => {
    setShowButton(!showButton);
  };

    const prompts = [
        { prompt: 'City Break', question: "Can you please recommend and help me go on a city break holiday?" },
        { prompt: 'Beach Getaway', question: "Can you please recommend and help me go on a beach getaway holiday?" },
        { prompt: 'Adventure', question: "Can you please recommend and help me go on an adventure holiday?" },
        { prompt: 'Surpise me', question: "Can you please recommend and me a great holiday. Make it a surprise!" },
    ]

    const handleButtonClicked = async (question) => {
      setTyping(true);
      await processMessage([{ message: question, sender: 'user'}, ...messages])
  
  }
    

    
  return (
    <div className='prompt__buttons'>
      {showButton && prompts.map((prompt, index) => (
        <button onClick={() => onButtonClicked(prompt.prompt)} key={index}>{prompt.prompt}</button>
      ))}
    </div>
  )
}

export default Buttons



