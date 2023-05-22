import React from 'react';
import Typewriter from "typewriter-effect";

function handleAnimation(event) {
    const stringValue = event.target.innerHTML;
    console.log(stringValue);
}

function Content(props) {
    return (
        <div>
            <p className='content' onClick={handleAnimation}> {props.content} </p>
        </div>
    )
}

export default Content;