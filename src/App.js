import React from "react";
import Header from './components/Header';
import Reset from './components/Reset';
import Winner from './components/Winner/';
import PreviousGames from './components/PreviousGames/';
import Player1 from './components/Player/Player1';
import Player2 from './components/Player/Player2';

const App = (
  {
    handleClickPlayer1,
    handleClickPlayer2,
    player1Serving,
    handleReset,
    previousGames
  }
) => {
  return (

    <React.Fragment>

      <Header />

      <div className="row mb-4">
        <Player1 handleClick={handleClickPlayer1} />
        <Player2 handleClick={handleClickPlayer2} />
      </div>

      <Winner />

      <Reset handleReset={handleReset} />

      <PreviousGames previousGames={previousGames} />

    </React.Fragment >);

};

export default App;