import React from "react";
import ReactCardFlip from "react-card-flip";
import { useState } from 'react';

const skill = [
    {
        id: 1,
        title: "HTML",
        progress: "80%"
    },
    {
        id: 2,
        title: "CSS",
        progress: "80%"
    },
    {
        id: 3,
        title: "JavaScript",
        progress: "80%",
    },
    {
        id: 8,
        title: "Python",
        progress: "70%",
    },
    {
        id: 4,
        title: "ReactJS",
        progress: "60%",
    },
    {
        id: 5,
        title: "NodeJS",
        progress: "60%",
    },
    {
        id: 6,
        title: "Java",
        progress: "60%",
    },
    {
        id: 7,
        title: "C++/C",
        progress: "60%",
    }
]

export default function SkillsBar() {
    const [isflipped, setFlipped] = useState(false);

    function flipCard(){
        setFlipped(!isflipped);
    }

    return (
        <ReactCardFlip flipDirection='horizontal' isFlipped={isflipped}>
        <div className="container-skill" onClick={flipCard}>
            <h1 className="title-text">Programming Languages</h1>
                {skill.map(data => (
                    <div className="skill-box" key={data.id}>
                        <span className="title">{data.title}</span>
                        <div className="skill-bar">
                            <span
                                className={`skill-per ${data.title.toLowerCase()}`}
                                style={{ "--progress": data.progress }}>
                                <span className="tooltip">{data.progress}</span>
                            </span>
                        </div>
                    </div>
                ))}
        </div>
        <div className="container-skill" onClick={flipCard}>
            <h1 className="title-text">Others</h1>
            <p>Hey! These are my Soft Skill!</p>
            <p>Effective Communication</p>
            <p>Problem-Solving Skills</p>
            <p>Attention to Detail</p>
            <p>Adaptability</p>
            <p>Teamwork</p>
            <p>The most important things, I'm keep Learning!</p>
        </div>
        </ReactCardFlip>
    );
}