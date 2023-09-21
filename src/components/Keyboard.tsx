import React from "react";

interface KeyboardProps {
  onGuess: (letter: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ onGuess }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return (
    <div className="keyboard">
      {alphabet.split("").map((letter) => (
        <button key={letter} onClick={() => onGuess(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
