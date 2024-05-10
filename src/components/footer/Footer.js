import React from "react";
import "./footer.css";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaStackOverflow } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export default function Footer(){
    return(
        <footer className="footer">
            <ul className = "power-logo">
                <a href="https://html.com/" style={{ color: 'whitesmoke'}}><FaHtml5 /></a>
                <a href="https://en.wikipedia.org/wiki/CSS" style={{ color: 'whitesmoke'}}><FaCss3 /></a>
                <a href="https://www.javascript.com/" style={{ color: 'whitesmoke'}}><IoLogoJavascript /></a>
                <a href="https://react.dev/" style={{ color: 'whitesmoke'}}><FaReact /></a>
                <a href="https://nodejs.org/en" style={{ color: 'whitesmoke'}}><FaNodeJs /></a>
                <a href="https://stackoverflow.com/" style={{ color: 'whitesmoke'}}><FaStackOverflow /></a>
            </ul>
        </footer>
    )
}