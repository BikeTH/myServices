import React, { useState, useEffect } from "react";
import "./compiler.css";
import { ReactTyped } from "react-typed";

export default function JavaCompiler(){
    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setShowText1(true);
        }, 3000);

        const timer2 = setTimeout(() => {
            setShowText2(true);
        }, 7000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    },[]);

    return(
        <div className="compilerJContext">
            <p>C:\Users\prob_1&gt; <ReactTyped strings={["javac Calculator.java"]} typeSpeed={100} showCursor={false} style={{ color: 'black' }}/></p>
            {showText1 && (<p>C:\Users\prob_1&gt; <ReactTyped strings={["java Calculator"]} typeSpeed={100} startDelay={1000} showCursor={false} style={{ color: 'black' }}/></p>)}
            {showText2 && (<p>Exception in thread "Calculator" java.lang.ArithmeticException: / by zero</p>)}
            {showText2 && (<p style={{textIndent:"40px"}}>at Main.divideNumbers &#40;Calculator.java:10&#41;</p>)}
            {showText2 && (<p style={{textIndent:"40px"}}>at Main.main &#40;Calculator.java:6&#41;</p>)}
            {showText2 && (<p style={{color: "#00a67d"}}>... Program finished with exit code 1</p>)}
        </div>
    )
}