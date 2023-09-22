function HangmanWord() {
  const word = "test";
  const guessedLetter = ["t"];

  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "5rem",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {word.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility: guessedLetter.includes(letter) ? "visible" : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;