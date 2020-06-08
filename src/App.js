import React from "react";

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
  return (<React.Fragment>

    <header className="jumbotron mt-4 mb-0">
      <h1>PongPing</h1>
    </header>

    <div className="row mb-4">
      <div className="col-md-6 mt-4">
        <div className={"card text-center " + (player1Serving === true ? "bg-dark text-white" : "")}>
          <h5 className="card-header">Player 1</h5>
          <div className="card-body">
            <p className="card-text display-1">{player1}</p>
          </div>
          <div className="card-footer">
            <button className="form-control btn btn-success" onClick={handleClickPlayer1}>
              +
              </button>
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
            <button className="form-control btn btn-success" onClick={handleClickPlayer2}>
              +
              </button>
          </div>
        </div>
      </div>
    </div>

    <h2 className="alert alert-success">
      {(winner === "") ? '' : `Player ${winner} wins`}
    </h2>

    <hr />

    <button className="btn btn-danger" onClick={handleReset}>
      Reset
      </button>
  </React.Fragment>);
};

export default App;