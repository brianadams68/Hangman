import React, { useState } from 'react';
import Keyboard from './Keyboard'; 

const Hangman: React.FC = () => {
  const [word] = useState<string>('example');
  const [incorrectGuesses, setIncorrectGuesses] = useState<number>(0);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const handleGuess = (letter: string) => {
    if (guessedLetters.includes(letter)) {
      return;
    }

    setGuessedLetters([...guessedLetters, letter]);

    if (!word.includes(letter)) {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
  };

  return (
    <div className="hangman">
      <img src={`hangman${incorrectGuesses}.png`} alt={`Hangman - Incorrect Guesses: ${incorrectGuesses}`} />
      <div className="word">
        {word.split('').map((letter, index) => (
          <span key={index} className="letter">
            {guessedLetters.includes(letter) ? letter : ' __ '}
          </span>
        ))}
      </div>
      
      <Keyboard onGuess={handleGuess} />
    </div>
  );
};

export default Hangman;






