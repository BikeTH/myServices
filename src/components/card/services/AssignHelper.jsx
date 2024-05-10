import React from "react";
import ReactCardFlip from "react-card-flip";
import {useState} from "react";
import "./servicesCard.css";

export default function AssignmentHelper(){
    const [isFlipped, setFlipped] = useState(false);

    function flipCard(){    
        setFlipped(!isFlipped);
    }



    return(
        <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className = "service-card" onClick={flipCard}>
                <h1 className="service-title">Assignment Helper, CS Student</h1>
                <div className="AH-background">
                    <p className="service-front">Provides Uni CS students assignment solutions</p>
                </div>
            </div>
            <div className = "service-card" onClick={flipCard}>
                <h1 className="service-title"> </h1>
                    <span style={{color: "whitesmoke", fontSize: "20px", justifyContent:"center"}}>Few services or solutions that you might need!</span>
                    <p>Programming</p>
                    <p>OS report for Linux</p>
                    <p>Fixing program bugs</p>
                    <p>Any related services</p>
            </div>
        </ReactCardFlip>
    )
}