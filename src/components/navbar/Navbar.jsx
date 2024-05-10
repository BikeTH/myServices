import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState } from "react";
import './Navbar.css'
import logo from '../../assets/logo/reactLogo.svg';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";


export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    };

    return (
    <nav className="nav">
        <Link to ="/">
            <img src={logo} className="nav-logo"/>
        </Link>
        <div className="menu" onClick={toggleMenu}>
            {menuOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end:true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}