import React, { useState } from "react";
import "./AHplayground.css";
import { IoBugSharp } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import JavaCompiler from "../../../../animation/javaCompiler/JavaCompiler";
import MCQP1 from "./question1/MCQP1";
import CSSq2 from "../../../../animation/CSSq2/CSSq2";
import CSSQ2 from "./question2/CSSQ2";

export default function AHplayground(){
    const [showCompiler, setShowCompiler] = useState(false);
    const [showCSS, setShowCSS] = useState(false);
    const [inputFlag, setInputFlag] = useState('');
    const [inputFlagStyle, setInputFlagStyle] = useState({});

    const handleRunCompiler = () => {
        setShowCompiler(true);
    };

    const handleRunCSS = () => {
        setShowCSS(true);
    };

    const checkFlag = () => {
        if (inputFlag === 'YouSeemPassionateIN-TECH') {
            setInputFlagStyle({ border: '2px solid green' });
        } else {
            setInputFlagStyle({ border: '2px solid red' });
        }
    };

    return(
        <div className="AH-playground-container">
            <h1>Find the bug! <IoBugSharp /></h1>
            <p>This <span>Workspace</span> allows you to identify the <span style={{color:"red"}}>Bug</span> of the program.</p>
            <p style={{paddingBottom: '20px'}}>With this playground, I hope you can find your interest to <span style={{color:"#B7B17E"}}>Like</span> <span>Programming</span>!</p>
            <div className="AH-playground">
                <div className="problem-java">
                    <h1>Problem 1: Java Programming <FaCirclePlay className="Q1-play" onClick={handleRunCompiler} /></h1>
                    <div className="prob-arrange-java">
                        <div className="problem-struct">
                            <p><span style={{color:"#2e95d3"}}>public class</span> <span style={{color:"#f22c3d"}}>Calculator</span> &#123;</p>
                            <p style={{textIndent:"40px"}}><span style={{color:"#2e95d3"}}>public static void</span> <span style={{color:"#f22c3d"}}>main</span>&#40;String&#91;&#93; args&#41; &#123;</p>
                            <p style={{textIndent:"80px"}}><span style={{color:"#f22c3d"}}>int num1</span> = 10;</p>
                            <p style={{textIndent:"80px"}}><span style={{color:"#f22c3d"}}>int num2</span> = 0;</p>
                            <br />
                            <p style={{textIndent:"40px"}}><span style={{color:"#f22c3d"}}>int result</span> = divideNumbers&#40;num1, num2&#41;;</p>
                            <p style={{textIndent:"40px"}}>System.out.println&#40;<span style={{color:"#00a67d"}}>"Result: "</span> + result&#41;; &#125;</p>
                            <br />
                            <p><span style={{color:"#2e95d3"}}>public static</span> <span style={{color:"#f22c3d"}}>int divideNumbers</span>&#40;<span style={{color:"#f22c3d"}}>int</span> a, <span style={{color:"#f22c3d"}}>int</span> b&#41; &#123;</p>
                            <p style={{textIndent:"40px"}}><span style={{color:"#f22c3d"}}>int result</span> = a / b;</p>
                            <p style={{textIndent:"40px"}}><span style={{color:"#2e95d3"}}>return</span> result; &#125;&#125;</p>
                        </div>
                        <div className="prob-1-ansArrangement">
                            {showCompiler && <div className="Problem-1-compiler">
                                <JavaCompiler />
                            </div>}
                            <div className="prob-1-ans">
                                <p style={{color:"black"}}>Your answer:</p>
                                <MCQP1 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="problem-css">
                    <h1>Problem 2: CSS <FaCirclePlay className="Q1-play" onClick={handleRunCSS} /></h1>
                    <div className="prod-arrange-css">
                        <div className="problem-struct">
                            <p style={{color:"#df3079"}}>.parent-container <span style={{color:"white"}}>&#123;</span></p>
                            <p><span style={{color:"#00a67d"}}>display</span>: flex;</p>
                            <p><span style={{color:"#00a67d"}}>align-items</span>: center;</p>
                            <p><span style={{color:"#00a67d"}}>height</span>: <span style={{color:"#df3079"}}>300px</span>;</p>
                            <p><span style={{color:"#00a67d"}}>border</span>: <span style={{color:"#df3079"}}>1px</span> solid black; &#125;</p>
                            <br />
                            <p><span style={{color:"#df3079"}}>.square</span> &#123;</p>
                            <p><span style={{color:"#00a67d"}}>width</span>: <span style={{color:"#df3079"}}>100px</span>;</p>
                            <p><span style={{color:"#00a67d"}}>height</span>: <span style={{color:"#df3079"}}>100px</span>;</p>
                            <p><span style={{color:"#00a67d"}}>background-color</span>: blue; &#125;</p>
                        </div>
                        <div className="prob-2-ansArrangement">
                            {showCSS && <div>
                                <CSSq2 />
                            </div>}
                            <div className="prob-2-ans">
                                <CSSQ2 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bonus-AH">
                    <h1>This is a BONUS question!</h1>
                    <div>
                        <p>Find a flag inside this page! No tools required, it might be somewhere in here  <span style={{display: "inline-block", transform: "rotate(90deg)", color:"red"}}>=P</span></p>
                        <input
                            type="text"
                            value={inputFlag}
                            onChange={(e) => setInputFlag(e.target.value)}
                            style={inputFlagStyle}
                            placeholder="Submit your FLAG here!"/>
                        <div className="Flag-btn">
                            <button onClick={checkFlag}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}