import React from "react";

const PreviousGames = ({ previousGames }) => (
  previousGames ? (

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
                <tr>
                  <td>
                    {previousGames.length - index}
                  </td>
                  <td>
                    {previousGame.player1.score}
                  </td>
                  <td>
                    {previousGame.player2.score}
                  </td>

                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div >

  ) : (<p> No games stored</p>)
);

export default PreviousGames;