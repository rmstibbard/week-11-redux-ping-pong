import React from "react";

const Player = (
  {
    playerName,
    score,
    winner,
    handleClick,
    serving
  }
) => (
    <div className="col-md-6 mt-4">
      <div className={"card text-center " + (serving ? "bg-dark text-white" : "")}>
        <h5 className="card-header">{playerName}</h5>
        <div className="card-body">
          <p className="card-text display-1">{score}</p>
        </div>
        <div className="card-footer">
          {winner === "" ?
            (<button className="form-control btn btn-success" onClick={handleClick} >+</button>) :
            (<button className="form-control btn btn-disabled" disabled >X</button>)
          }
        </div>
      </div>
    </div>

  )

export default Player;