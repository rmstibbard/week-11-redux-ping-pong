import React from "react";

const App = (
  {
    player1,
    player2,
    handleClickPlayer1,
    handleClickPlayer2,
    player1Serving,
    handleReset
  }
) => (
    <React.Fragment>
      {/* header */}
      <header className="jumbotron mt-4 mb-0">
        <h1>PongPing</h1>
      </header>

      {/* scores */}
      <div className="row mb-4">
        <div className="col-md-6 mt-4">
          <div className={"card text-center " + (player1Serving === true ? "bg-dark text-white" : "")}>
            <h5 className="card-header">Player 1</h5>
            <div className="card-body">
              <p className="card-text display-1">{player1}</p>
            </div>
            <div className="card-footer">
              <button
                className="form-control btn btn-success"
                onClick={handleClickPlayer1}>
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
              <button
                className="form-control btn btn-success"
                onClick={handleClickPlayer2}>
                +
            </button>
            </div>
          </div>
        </div>
      </div>

      { /* winner message */}
      <h2 className="alert alert-success">Player {/* winning player here */} wins!</h2>

      <hr />

      { /* reset button */}
      <button
        className="btn btn-danger"
        onClick={handleReset}>
        Reset
      </button>
    </React.Fragment>
  );

export default App;