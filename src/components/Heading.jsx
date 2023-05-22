import React from 'react';

function Heading(props) {
    return (
        <h1 className='heading' style={{color: props.color}}> {props.title} </h1>
    )
}

export default Heading;