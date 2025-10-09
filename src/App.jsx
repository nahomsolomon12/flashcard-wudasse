import React, { useState } from 'react';
import './App.css'
import Flashcard from './components/flashcard';

function App() {
  // Array of flashcards
  const flashcards = [
    { question: "ውዳሴ ማርያም", answer: "Praise of Mary" },
    { question: "አግዓዘ", answer: "He freed" },
    { question: "ሠረቀ", answer: "He revealed" },
    { question: "ላዕሌሃ", answer: "upon her" },
    { question: "ዘሀሎ", answer: "He who was" },
    { question: "ትትፌሣሕ", answer: "She rejoiced" },
    { question: "ብርሃን", answer: "Light" },
    { question: "መጻእከ", answer: "You came" },
    { question: "አድኀንኮ", answer: "You saved" },
    { question: "ረሰይካ", answer: "You made her" },
    { question: "ባረክናከ", answer: "We blessed you" },
    { question: "እንበለ", answer: "without" }
  ];




  // Declare a state variable to hold the input's value
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the state when the input changes
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };



  const [attempt, setAttempt] = useState("")

  const handleAttempt = () => {
    setAttempt((input) => {
      let message;
      if (input === flashcards.answer) {
        message = <p>That is correct!</p>;
      } else {
        message = <p>Please try again</p>;
      }

      return (
        <div>
          {message}
        </div>
      );
    });
  }

  // Keep track of current flashcard index
  const [currentIndex, setCurrentIndex] = useState(0);



  const handleBefore = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : flashcards.length - 1
    );
  };

  // Handler to move to next card
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < flashcards.length ? prevIndex + 1 : 0 // loops back to first
    );
  };

  return (
    <>
      <div className='background'>
        <h1 className='header-title'>"Ge'ez" your way through: Flashcard Set</h1>
        <h2>Number of Cards: {currentIndex + 1}/{flashcards.length}</h2>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Flashcard
            question={flashcards[currentIndex].question}
            answer={flashcards[currentIndex].answer}
          />
          <br />

          <label htmlFor="myInput">Enter text:</label>
          <input
            type="text"
            id="myInput"
            value={inputValue} // The input's value is controlled by the state
            onChange={handleChange} // Update state on every change
            placeholder="Type something here..."
          />
          <br />
          <button
            onClick={handleBefore}>
            Before
          </button>
          <button
            onClick={handleNext}
          >Next</button>
          <br />
          <button>Shuffle</button>
        </div>
      </div>
    </>
  );
}

export default App;
