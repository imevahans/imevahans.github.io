import React from 'react';

function FooterContent(props) {
    return (
        <div>
            <p className='footerContent'> {props.content} </p>
        </div>
    )
}

export default FooterContent;