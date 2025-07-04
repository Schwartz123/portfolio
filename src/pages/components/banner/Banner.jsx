import React from "react";
import "./Banner.css";
import emailIcon from "../../images/emailIcon.png";
import linkedInIcon from "../../images/linkedInIcon.png";
import cvIcon from "../../images/cvIcon.png";
import githubIcon from "../../images/githubIcon.png";

export default function Banner() {
    return (
        <div className="banner">
            <h1>Software Engineer</h1>
            <div className="banner-contact">
                <a href="mailto:peter.sl@live.dk" className="contact-item">
                    <img src={emailIcon} alt="Email" className="contact-icon" />
                    E-Mail
                </a>
                <a href="https://www.linkedin.com/in/peter-schwartz-lauridsen-9b6b3a224/" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <img src={linkedInIcon} alt="LinkedIn" className="contact-icon" />
                    LinkedIn
                </a>
                <a href="https://github.com/Schwartz123" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <img src={githubIcon} alt="GitHub" className="contact-icon" />
                    GitHub
                </a>
                <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <img src={cvIcon} alt="CV" className="contact-icon" />
                    CV
                </a>
            </div>
        </div>
    );
}
