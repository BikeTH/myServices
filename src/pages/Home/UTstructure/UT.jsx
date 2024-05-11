import React from "react";
import "./UT.css";
import UTfeature from "./UTfeature/UTfeature";

export default function UTstructure(){
    return(
        <div className="UT-structure">
            <h1 style={{marginTop:"0px"}}>Invest Wisely Today</h1>
            <p>Unlock the potential of your savings by discover the benefits that unit trusts offer to investors!</p>
            <div className="UT-feature">
                <UTfeature />
            </div>
        </div>
    )
}