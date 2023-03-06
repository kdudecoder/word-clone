import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import HappyBanner from "../Banner/HappyBanner";
import SadBanner from "../Banner/SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessInput, setGuessInput] = React.useState("");
  const [guessResults, setGuessResults] = React.useState([]);
  const [gameResult, setGameResult] = React.useState(0);
  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput
        guessInput={guessInput}
        setGuessInput={setGuessInput}
        guessResults={guessResults}
        setGuessResults={setGuessResults}
        answer={answer}
        setGameResult={setGameResult}
      />
      {gameResult === 1 ? (
        <HappyBanner numOfGuesses={guessResults.length} />
      ) : gameResult === 2 ? (
        <SadBanner answer={answer} />
      ) : (
        <></>
      )}
    </>
  );
}

export default Game;
