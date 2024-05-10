import React from "react"
import { Route, Routes } from "react-router-dom"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
import Navbar from "./components/navbar/Navbar"
import NavToTop from "./components/toTop/NavToTop"

export default function App(){
    return(
        <>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            <NavToTop />
        </>
    )
}
