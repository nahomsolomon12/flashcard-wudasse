import React, { useState } from 'react';
import './App.css'
import Flashcard from './components/flashcard';

function App() {
  // Array of flashcards
  const flashcards = [
    { question: "What is React?", answer: "A JavaScript library for building UIs." },
    { question: "Who created React?", answer: "Facebook (now Meta)." },
    { question: "What is JSX?", answer: "A syntax extension for JavaScript." },
    { question: "What is a component?", answer: "A reusable piece of UI." }
  ];

  // Keep track of current flashcard index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler to move to next card
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < flashcards.length ? prevIndex + 1 : 0 // loops back to first
    );
  };

  return (
    <div className='background'>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Flashcard
          question={flashcards[currentIndex].question}
          answer={flashcards[currentIndex].answer}
        />
        <br />
        <button
          onClick={handleNext}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Next Card
        </button>
      </div>
    </div>
  );
}

export default App;
