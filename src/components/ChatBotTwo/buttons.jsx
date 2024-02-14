import React, { useState } from 'react'
import './styles.css'

function Buttons({onButtonClicked}) {

  // const [showButton, setShowButton] = useState(true)

  // const toggleButton = () => {
  //   setShowButton(!showButton);
  // };

    const prompts = [
        { prompt: 'Travel Inspiration', question: "Can you please send me some travel inspiration all to do with cruises, but ask questions as well" },
        { prompt: 'Accommodation Booking', question: "Recommend me good accommodation to do with cruises" },
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



