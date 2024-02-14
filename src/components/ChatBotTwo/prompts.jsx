import React from 'react'

const prompts = [
    { prompt: 'Relaxing', question: "Now add on to the answer you said before but give recommendations for relaxing cruises" },
    { prompt: 'Delicious Food', question: "Now add on to the answer you said before but give recommendations for cruises with good food" },
    { prompt: 'Kids Activities', question: "Now add on to the answer you said before but give recommendations for cruises that are good for kids acitivities" },
    { prompt: 'Surpise meeeeeeeeeeeeeeeeeeeeeeeeee', question: "Can you please recommend and me a great holiday. Make it a surprise!" },
]

function Prompts() {
  return (
    <div className='prompt__buttons'>
      {prompts.map((prompt, index) => (
        <button className='prompt' onClick={() => onButtonClicked(prompt.prompt)} key={index}>{prompt.prompt}</button>
      ))}
    </div>
  )
}

export default Prompts