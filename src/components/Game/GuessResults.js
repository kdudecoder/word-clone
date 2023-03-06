import React from "react";
import Guess from "./Guess";
import { range } from "../../utils";

function GuessResults({ guessResults, answer }) {
  return (
    <>
      <div className="guess-results">
        {range(6).map((index) => {
          const guessCharacters = guessResults[index]
            ? guessResults[index]
            : [" ", " ", " ", " ", " "];
          return (
            <Guess
              key={crypto.randomUUID()}
              guessCharacters={guessCharacters}
            />
          );
        })}
      </div>
    </>
  );
}

export default GuessResults;
