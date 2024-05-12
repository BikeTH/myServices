import React from "react";
import "./footer.css";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaStackOverflow } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export default function Footer(){
    return(
        <footer className="footer">
            <ul className = "power-logo">
                <a href="https://html.com/" style={{ color: 'whitesmoke'}} target="_blank" rel="noreferrer noopener"><FaHtml5 /></a>
                <a href="https://en.wikipedia.org/wiki/CSS" style={{ color: 'whitesmoke'}} target="_blank" rel="noreferrer noopener"><FaCss3 /></a>
                <a href="https://www.javascript.com/" style={{ color: 'whitesmoke'}} target="_blank" rel="noreferrer noopener"><IoLogoJavascript /></a>
                <a href="https://react.dev/" style={{ color: 'whitesmoke'}} target="_blank" rel="noreferrer noopener"><FaReact /></a>
                <a href="https://nodejs.org/en" style={{ color: 'whitesmoke'}} target="_blank" rel="noreferrer noopener"><FaNodeJs /></a>
                <a href="https://stackoverflow.com/" style={{ color: 'whitesmoke'}} target="_blank" rel="noreferrer noopener"><FaStackOverflow /></a>
            </ul>
        </footer>
    )
}