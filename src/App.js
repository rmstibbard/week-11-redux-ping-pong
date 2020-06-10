import React from "react";
import Header from './components/Header';
import Reset from './components/Reset/';
import Winner from './components/Winner/';
import PreviousGames from './components/PreviousGames/';
import Player1 from './components/Player/Player1';
import Player2 from './components/Player/Player2';

const App = (
  {
    player1Serving,
    handleReset,
    previousGames
  }
) => {
  return (

    <React.Fragment>

      <Header />

      <div className="row mb-4">
        <Player1 />
        <Player2 />
      </div>

      <Winner />

      <Reset handleReset={handleReset} />

      <PreviousGames previousGames={previousGames} />

    </React.Fragment >);

};

export default App;