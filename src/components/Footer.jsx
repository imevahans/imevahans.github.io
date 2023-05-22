import React from 'react';
import Heading from "./Heading.jsx"
import FooterContent from './FooterContent.jsx';

function Footer() {
    return (
        <div className='footer' id="contact">
            <Heading 
                title="Contact."
                color="#13005A"
            />
            <FooterContent 
                content="I would love to connect with you! Feel free to find me with the socials below!"
            />
            <div className="footer-icons">
                <a href="https://github.com/imevahans">
                    <img className="footer-icon" src="./github.svg" alt="Github Icon"></img>
                </a>
                <a href="https://www.linkedin.com/in/xinhanchen/">
                    <img className="footer-icon" src="./linkedin.svg" alt="LinkedIn Icon"></img>
                </a>
                <a href="mailto:imevahans@gmail.com">
                    <img className="footer-icon" src="./envelope.svg" alt="Email Icon"></img>
                </a>
            </div>
        </div>
        
    )
}

export default Footer;