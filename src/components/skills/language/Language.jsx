import React from "react";
import "../skill.css";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";


const language = [
    {
        id: 1,
        language: "中文",
        progress: "80%",
    },
    {
        id: 2,
        language: "English",
        progress: "70%",
    },
    {
        id: 3,
        language: "Malay",
        progress: "60%",
    },
    {
        id: 4,
        language: "日本語",
        progress: "23%",
    }
]

export default function Language(){
    const [isflipped, setFlipped] = useState(false);

    function flipCard(){
        setFlipped(!isflipped);
    }
    return(
        <ReactCardFlip flipDirection='horizontal' isFlipped={isflipped}>
        <div className="container-skill" onClick={flipCard}>
            <h1 className="title-text">Languages</h1>
            {language.map(data =>(
                <div className="skill-box" key={data.id}>
                    <span className="title">{data.language}</span>
                        <div className="skill-bar">
                        <span
                        className={`skill-per ${data.language.toLowerCase()}`}
                        style={{ "--progress": data.progress }}
                        >
                    <span className="tooltip">{data.progress}</span>
                    </span>
                </div>
            </div>
            ))}
        </div>
        <div className="container-skill" onClick={flipCard}>
            <h1 className="title-text">Proficient</h1>
            <p>我能说，写，读</p>
            <p>I can Speak, Write, Read</p>
            <p>Saya boleh bertutur, menulis, membaca</p>
            <p>私は日本語をほとんど話せませんし、書けませんし、読むこともできませんが、現在勉強中です。</p>
        </div>
        </ReactCardFlip>
    )
}