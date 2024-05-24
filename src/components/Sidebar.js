import React from 'react';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillLinkedin,
} from "react-icons/ai";

function Sidebar() {
    return (
        <div class="icon-bar">
            <a href="https://github.com/itzhardcore" target='_blank' rel='noreferrer' class="github"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/brunomosilva/" target='_blank' rel='noreferrer' class="linkedin"><AiFillLinkedin /></a>
            <a href="https://www.instagram.com/brunomosilva/" target='_blank' rel='noreferrer' class="instagram"><AiFillInstagram /></a>
        </div >
    )
}

export default Sidebar