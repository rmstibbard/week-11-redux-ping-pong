import React from "react";
import Header from './components/Header';
import Reset from './components/Reset';
import Success from './components/Success';
import PlayerCard from './components/PlayerCard';
import PreviousGames from './components/PreviousGames';

const App = (
  {
    player1,
    player2,
    handleClickPlayer1,
    handleClickPlayer2,
    player1Serving,
    handleReset,
    winner,
    previousGames
  }
) => {
  return (

    <React.Fragment>

      <Header />

      <div className="row mb-4">

        <PlayerCard
          player="1"
          score={player1}
          winner={winner}
          handleClick={handleClickPlayer1}
          serving={player1Serving}
        />

        <PlayerCard
          player="2"
          score={player2}
          winner={winner}
          handleClick={handleClickPlayer2}
          serving={!player1Serving}
        />

      </div>

      <Success winner={winner} />

      <Reset handleReset={handleReset} />

      <PreviousGames previousGames={previousGames} />

    </React.Fragment >);

};

export default App;