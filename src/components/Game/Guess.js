import React from "react";

function Guess({ guessCharacters }) {
  return (
    <p key={crypto.randomUUID()} className="guess">
      {guessCharacters.map((character) => (
        <span key={crypto.randomUUID()} className={`cell ${character.status}`}>
          {character.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
