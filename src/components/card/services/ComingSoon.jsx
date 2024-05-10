import React from "react";
import ReactCardFlip from "react-card-flip";
import {useState} from "react";
import "./servicesCard.css";

export default function ComingSoon(){
    const [isFlipped, setFlipped] = useState(false);

    function flipCard(){    
        setFlipped(!isFlipped);
    }

    return(
        <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className = "service-card" onClick={flipCard}>
                <h1 className="service-title">Coming Soon</h1>
                <div className="CS-background">
                    <p className="service-front">More services soon...</p>
                </div>
            </div>
            <div className = "service-card" onClick={flipCard}>
                <h1 className="service-title"> </h1>
                    <span style={{color: "whitesmoke", fontSize: "20px", justifyContent:"center"}}>Coming Soon...</span>
                    <p>Soon...</p>
            </div>
        </ReactCardFlip>
    )
}