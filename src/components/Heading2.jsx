import React from 'react';

function Heading2(props) {
    return (
        <h2 className='heading2' style={{color: props.color}}> {props.title} </h2>
    )
}

export default Heading2;