import React, { useState } from 'react';
import '../App.css';

function Flashcard({ question, answer }) {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div
            className={`flashcard ${flipped ? 'flipped' : ''}`}
            onClick={handleFlip}
        >
            <div className="flashcard-inner">
                <div className="flashcard-front">
                    <p>{question}</p>
                </div>
                <div className="flashcard-back">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
}

export default Flashcard;
