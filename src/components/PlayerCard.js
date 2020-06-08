import React from "react";

const PlayerCard = (
  {
    score,
    winner,
    handleClick,
    serving
  }
) => (
    <div className="col-md-6 mt-4">
      <div className={"card text-center " + (serving === true ? "bg-dark text-white" : "")}>
        <h5 className="card-header">Player 1</h5>
        <div className="card-body">
          <p className="card-text display-1">{score}</p>
        </div>
        <div className="card-footer">
          {winner === "" ? (
            <button
              className="form-control btn btn-success" onClick={handleClick} >
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

  )

export default PlayerCard;