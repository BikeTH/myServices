import React, { useRef } from "react";
import './Contact.css';
import './containerContact.css';
import { ReactTyped } from "react-typed";
import { IconContext } from "react-icons/lib";
import { FaLinkedin, FaInstagramSquare, FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import MatrixL from "../../animation/MatrixL";
import MatrixR from "../../animation/MatrixR";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2ucd8zd', 'template_ddll09m', form.current, {
        publicKey: 'pe9RvYnimsWTu9TVa',
        })
        .then(() => {
            console.log('SUCCESS!');
            form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };


    return(
        <IconContext.Provider value={{size:"3em", style: {margin: "0.5em"}}}>
        <>
                <MatrixL />
            <div className="container">
                <h1 className="contact-title"><ReactTyped strings={["Get in touch"]} 
                    typeSpeed={100}
                    backSpeed={200}
                    loop
                    />
                </h1>
                    <p>
                    <ReactTyped className="pointColor" strings={["Connection? ", "Instagram? ", "Whatapps? ", "LinkedIn? ", "Email? "]} 
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                    /> 
                    Let's be friend!
                    </p>
                <div className="connect">
                    <ul className="addMe">
                        <a href="https://www.linkedin.com/in/wilfred-tsen-yik-chong-2a37a724b"><FaLinkedin color ="#0077B5"/></a>
                        <a href="https://www.instagram.com/wilc_43?igsh=MWtteTUyOXVxbjlvdg=="><FaInstagramSquare color = "#bc2a8d"/></a>
                        <a href="tel:+601121823390"><FaPhoneSquare color = "#25D366"/></a>
                        <a href="mailto:700024165@student.curtin.edu.my"><MdEmail color = "636363"/></a>
                    </ul>
                </div>
                <div className="contact">
                    <h1 className="feedback">Feedback?</h1>
                    <p>Reach out to me!</p>
                    <form ref={form} className="form-feedback" onSubmit={sendEmail}>
                        <input type="text" placeholder="Name"  name="user_name" required />
                        <input type="text" placeholder="Email"  name="user_email" required />
                        <input type="text" placeholder="Subject"  name="subject" required />
                        {/*<select name="subject" defaultValue={'Default'}>
                            <option value="Default" disabled>Rating</option>
                            <option value="">5*</option>
                            <option value="">4*</option>
                            <option value="">3*</option>
                            <option value="">2*</option>
                            <option value="">1*</option>
    </select>*/}
                        <textarea name="message" placeholder="Feedback/Comment" cols="30" rows="10" />
                        <button type="submit" className="submit" onSubmit={sendEmail}>SUBMIT</button>
                    </form>
                </div>
            </div>
            <MatrixR />
        </>
        </IconContext.Provider>
    )
}