import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function SocialIcons() {
    return (
        <ul className="social-icons-list">
            <li className="social-icon-item">
                <a
                    href="https://github.com/itzhardcore"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-link"
                >
                    <AiFillGithub className="social-icon" />
                </a>
            </li>
            <li className="social-icon-item">
                <a
                    href="https://www.linkedin.com/in/brunomosilva/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-link"
                >
                    <FaLinkedinIn className="social-icon" />
                </a>
            </li>
            <li className="social-icon-item">
                <a
                    href="https://www.instagram.com/brunomosilva"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-link"
                >
                    <AiFillInstagram className="social-icon" />
                </a>
            </li>
        </ul>
    );
}

export default SocialIcons;
