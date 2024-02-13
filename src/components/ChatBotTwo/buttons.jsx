import React, { useState } from 'react'
import './styles.css'

function Buttons({onButtonClicked}) {

  // const [showButton, setShowButton] = useState(true)

  // const toggleButton = () => {
  //   setShowButton(!showButton);
  // };

    const prompts = [
        { prompt: 'City Break', question: "Can you please recommend and help me go on a city break holiday?" },
        { prompt: 'Beach Getaway', question: "Can you please recommend and help me go on a beach getaway holiday?" },
        { prompt: 'Adventure', question: "Can you please recommend and help me go on an adventure holiday?" },
        { prompt: 'Surpise meeeeeeeeeeeeeeeeeeeeeeeeee', question: "Can you please recommend and me a great holiday. Make it a surprise!" },
    ]

   
   

    
  return (
    <div className='prompt__buttons'>
      {prompts.map((prompt, index) => (
        <button className='prompt' onClick={() => onButtonClicked(prompt.prompt)} key={index}>{prompt.prompt}</button>
      ))}
    </div>
  )
}

export default Buttons



