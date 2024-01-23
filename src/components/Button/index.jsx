import React, { useState } from 'react';
//useState hook from react updating
import "../../App.css";

const Button = () => {
    //buttonState is set to Sumamrise initially 
    const [buttonText, setButtonText] = useState('Summarise');
    //when clicked the button text is set to summarasing, then after 2 seconds it turns to resummarise from then on
    const handleClick = () => {
        setButtonText('Summarising');

        setTimeout(() => {
            setButtonText('Resummarise');
        }, 2000)
    }

    return <div>
        <button className='onceButton' onClick={handleClick}>{buttonText}</button>
    </div>
}

export default Button;