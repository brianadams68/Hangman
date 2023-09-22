import { useState } from "react";
import "./App.css";
import Hangman from "./components/Hangman";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import words from "./wordList.json";

export function App() {
  // eslint-disable-next-line
  const [wordToGuesss, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  // eslint-disable-next-line
  const [guessedLetter, setGuessedLetter] = useState<string[]>([]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
      <Hangman />
      <HangmanWord />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </div>
  );
}
