import React from "react";
import Header from './components/Header';
import Reset from './components/Reset';
import Success from './components/Success';

const App = (
  {
    player1,
    player2,
    handleClickPlayer1,
    handleClickPlayer2,
    player1Serving,
    handleReset,
    winner
  }
) => {
  return (

    <React.Fragment>

      <Header />

      <div className="row mb-4">
        <div className="col-md-6 mt-4">
          <div className={"card text-center " + (player1Serving === true ? "bg-dark text-white" : "")}>
            <h5 className="card-header">Player 1</h5>
            <div className="card-body">
              <p className="card-text display-1">{player1}</p>
            </div>
            <div className="card-footer">
              {winner === "" ? (
                <button
                  className="form-control btn btn-success" onClick={handleClickPlayer1} >
                  +
                </button>
              ) :
                (
                  <button className="form-control btn btn-disabled" disabled >X</button>
                )
              }
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-4">
          <div className={"card text-center " + (player1Serving === false ? "bg-dark text-white" : "")}>
            <h5 className="card-header">Player 2</h5>
            <div className="card-body">
              <p className="card-text display-1">{player2}</p>
            </div>
            <div className="card-footer">
              {winner === "" ? (
                <button
                  className="form-control btn btn-success" onClick={handleClickPlayer2} >
                  +
                </button>
              ) :
                (
                  <button className="form-control btn btn-disabled" disabled >X</button>
                )
              }
            </div>
          </div>
        </div>
      </div>

      <Success winner={winner} />



      <Reset handleReset={handleReset} />

    </React.Fragment >);
};

export default App;