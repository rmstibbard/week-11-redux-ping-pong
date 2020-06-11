import React from "react";
import Player1 from './Player/Player1';
import Player2 from './Player/Player2';
import Winner from './Winner/';
import Reset from './Reset/';
import PreviousGames from './PreviousGames/';

const Game = () => {
  return (
    <>
      <div className="row mb-4">
        <Player1 />
        <Player2 />
      </div>
      <Winner />
      <Reset />
      <PreviousGames />
    </>
  )
}

export default Game;