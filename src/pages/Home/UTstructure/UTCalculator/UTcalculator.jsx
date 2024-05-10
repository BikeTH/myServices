import React from "react";
import "./UTcalculator.css";
import FVcalculation from "./UTcalculation/FVcalculation";

export default function UTcalculator(){
    return(
        <div className="UT-calculator-container">
            <h1>Compound Interest Calculator</h1>
            <p>This <span>Calculator</span> allows you to calculate your <span>Future Value</span> by simulating the data in the calculator.</p>
            <p style={{paddingBottom: '20px'}}>With this tool, you can compare the return of each <span>Funds</span> or even other <span>Products</span> you might be interested in!"</p>
            <div className="UT-calculator">
                <FVcalculation />
            </div>
        </div>
    )
}