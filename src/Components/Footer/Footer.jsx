import "./Footer.css"
import React, { useState } from 'react';
import { 
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaEnvelope
 } from "react-icons/fa"

function Footer(){

    const email = 'marcelinnoj@gmail.com';
    const [showEmail, setShowEmail] = useState(true);

    const handleMailClick = () => {
        window.location.href = `mailto:${email}`;
        setShowEmail(false);
      };

    return(
        <footer className="footer" id="contact">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#151418" fill-opacity="1" d="M0,224L1440,288L1440,320L0,320Z"></path></svg>
            <div className="footer-wrapper container">
                <div className="footer-social">
                    <h2 className="footer-header">
                        Contact
                    </h2>
                    <p className="footer-text">
                    If you have any questions, or just want to say hello, feel free to contact me. Below are my social pages and my email:
                    </p>
                    <div className="footer-icons">
                        {showEmail ? (
                        <a href={`mailto:${email}`} className="footer-link" onClick={handleMailClick}>
                        <FaEnvelope size="40px" />
                        </a>
                        ) : (
                            <div className="email_box"><a className="footer-link footer-text">{email}</a></div>
                        )}
                        <a href="https://twitter.com/_Marcelinno_" className="footer-link" target="_blank"><FaTwitter size="40px" /></a>
                        <a href="https://github.com/XavierJ96" className="footer-link" target="_blank"><FaGithub size="40px" /></a>
                        <a href="https://www.linkedin.com/in/xavier-julies/" className="footer-link" target="_blank"><FaLinkedin size="40px" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer