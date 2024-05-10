import React, { useState } from 'react';
import "./MCQP1.css";

const Choices = [
  { value: '0', label: '0' },
  { value: '10', label: '10' },
  { value: 'no answer', label: 'No Answer' },
  { value: 'undefined', label: 'Undefined' },
];

export default function MultipleChoiceQuestion() {
  const [selectedChoice, setSelectedChoice] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSelection = (value) => {
    setSelectedChoice(value);
    setIsCorrect(value === 'no answer');
  };

  return (
    <div>
      <div className="MCQ1-arrangement">
      {Choices.map((choice) => (
        <button className="MCQ1-btn"
          key={choice.value}
          onClick={() => handleSelection(choice.value)}
          style={{
            backgroundColor:
              selectedChoice === choice.value
                ? isCorrect
                  ? 'green'
                  : 'red'
                : '', borderRadius: "5px", padding: "5px"
          }}
        >
          {choice.label}
        </button>
      ))}
      </div>
      {selectedChoice && (
        <div>
          {isCorrect ? (
            <p style={{ color: 'green' }}>Correct Answer!</p>
          ) : (
            <p style={{ color: 'red' }}>Incorrect Answer!</p>
          )}
          <p>Explanation: When dividing by zero, the result is undefined or not a number (NaN).</p>
        </div>
      )}
    </div>
  );
};
