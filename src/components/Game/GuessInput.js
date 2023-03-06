import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { checkGuess } from "../../game-helpers";

function GuessInput({
  guessInput,
  setGuessInput,
  guessResults,
  setGuessResults,
  answer,
  setGameResult,
}) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess: guessInput.toUpperCase() });
        const newGuesses = [...guessResults];
        if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
          setGameResult(2);
        } else {
          let newGuess = checkGuess(guessInput.toUpperCase(), answer);
          newGuesses[guessResults.length] = newGuess;
          let count = 0;
          for (let i = 0; i < 5; i++) {
            if (newGuess[i].status === "correct") count++;
          }
          if (count === 5) setGameResult(1);
          setGuessResults(newGuesses);
        }
        setGuessInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guessInput}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        onChange={(event) => {
          setGuessInput(event.target.value);
        }}
        style={{ textTransform: "uppercase" }}
      />
    </form>
  );
}

export default GuessInput;
