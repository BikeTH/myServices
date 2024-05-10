import React from "react";
import "./AH.css";
import AHfeature from "./AHfeature/AHfeature";

export default function AHstructure(){
    return(
        <div className="AH-structure">
            <h1 style={{marginTop:"0px"}}>CS Assignment Aid</h1>
            <p>Your Trusted Computer Science Assignment Helper</p>
            <div className="AH-feature">
                <AHfeature />
            </div>
        </div>
    )
}