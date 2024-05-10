import React from "react";
import "./AHfeature.css"
import { VscTerminalCmd } from "react-icons/vsc";
import { HiAcademicCap } from "react-icons/hi";
import { RiHandCoinLine } from "react-icons/ri";

const features = [
    {
        id: 1,
        symbol: <VscTerminalCmd/>,
        title: "Multiple-Language Programming",
        context: "Students can access comprehensive resources covering a wide spectrum of programming languages and system design principles.",
    },
    {
        id: 2,
        symbol: <HiAcademicCap/>,
        title: "Academic Integrity",
        context: "Maintaining academic integrity and avoiding plagiarism. Providing report on code explanations to help students grasp the purpose of code",
    },
    {
        id: 3,
        symbol: <RiHandCoinLine/>,
        title: "Affordable Assistance",
        context: "Allow users to access professional coding help and resources with relatively low costs."
    }
]

export default function AHfeature(){
    return(
        <div className="AH-feature-arrangement">
            {
                features.map(data => (
                    <div className="AH-symbol" key={data.id}>
                        <h1>{data.symbol}</h1>
                        <div className="AH-feature">
                           <h1>{data.title}</h1>
                           <p>{data.context}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}