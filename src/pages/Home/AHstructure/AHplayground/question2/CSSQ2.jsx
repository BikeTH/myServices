import React, { useState } from 'react';
import "./CSSQ2.css";

export default function CSSQ2() {
    const [inputCenter, setInputCenter] = useState('');
    const [inputCenterStyle, setInputCenterStyle] = useState({});
    const [inputColor, setInputColor] = useState('');
    const [inputColorStyle, setInputColorStyle] = useState({});

    const checkCenterAnswer = () => {
        if (inputCenter === 'justify-content: center;' || inputCenter === 'justify-content:center;') {
            setInputCenterStyle({ border: '2px solid green' });
        } else {
            setInputCenterStyle({ border: '2px solid red' });
        }
    };

    const checkColorAnswer = () => {
        if (inputColor === 'background-color: #9fef00;' || inputColor === 'background-color:#9fef00;') {
            setInputColorStyle({ border: '2px solid green' });
        } else {
            setInputColorStyle({ border: '2px solid red' });
        }
    };

    return (
    <div className='arrangement-css'>
        <div className="css-btn-input" style={{paddingTop:"10px"}}>
        <input
            type="text"
            value={inputCenter}
            onChange={(e) => setInputCenter(e.target.value)}
            style={inputCenterStyle}
            placeholder="Can you center this sqr?"/>
        <button onClick={checkCenterAnswer}>Submit</button>
        </div>
        <div className="css-btn-input">
        <input
            type="text"
            value={inputColor}
            onChange={(e) => setInputColor(e.target.value)}
            style={{...inputColorStyle, color:"#9fef00"}}
            placeholder="Can you change sqr color to this txt color?"/>
        <button onClick={checkColorAnswer}>Submit</button>
        </div>
    </div>
    );
}
