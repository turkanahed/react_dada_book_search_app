import React from 'react'
import { BsGithub } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import "./style.css"
const Footer = () => {
    return (
        <footer>
            <ul>
                <li><a href="/"><BsGithub /></a></li>
                <li><a href="/"><AiFillLinkedin /></a></li>
                <li><a href="/"><AiFillInstagram /></a></li>
                <li><a href="/"><FaFacebookSquare /></a></li>
                <li><a href="/"><AiFillTwitterCircle /></a></li>
            </ul>
            <div className="title">
                <a href="/">Designed & Built by <br /><span>Turkanahed :)</span></a>
            </div>
        </footer>
    )
}

export default Footer
