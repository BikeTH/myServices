import React from "react";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import "./servicesCard.css";

export default function UTC() {
    const [isFlipped, setFlipped] = useState(false);

    function flipCard() {
        setFlipped(!isFlipped);
    }

    return (
        <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="service-card" onClick={flipCard}>
                <h1 className="service-title">Unit Trust Consultancy</h1>
                <div className="UT-background">
                    <p className="service-front">Providing unit trust services</p>
                </div>
            </div>
            <div className="service-card" onClick={flipCard}>
                <h1 className="service-title"> </h1>
                <span style={{ color: "whitesmoke", fontSize: "20px", justifyContent: "center" }}>Create an investment plan that suits your needs!</span>
                <p>Equity fund</p>
                <p>Mixed Asset/Balanced</p>
                <p>Bond/Fixed income</p>
                <p>Money Market</p>
            </div>
        </ReactCardFlip>
    )
}
