import React from "react";

const PreviousGames = ({ previousGames }) => (
  (previousGames.length > 0) ? (

    <div className="previous-games">

      <h1>Previous Games</h1>

      <div className="col-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Game No.</th>
              <th>Player 1</th>
              <th>Player 2</th>
            </tr>
          </thead>
          <tbody>

            {
              previousGames.reverse().map((previousGame, index) => (
                <tr key={index}>
                  <td>
                    {previousGames.length - index}
                  </td>
                  <td className={previousGame.player1.won ? " winner" : " loser"}>{previousGame.player1.score}</td>
                  <td className={previousGame.player2.won ? " winner" : " loser"}>{previousGame.player2.score}</td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>

  ) : (
      <div className="previous-games">
        <h1> No previous games stored</h1>
      </div>
    )
);

export default PreviousGames;