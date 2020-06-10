import initial from "./initial";

const player1Scores = (state) => (
  {
    ...state,
    player1Score: state.player1Score + 1
  }
);

const player2Scores = (state) => (
  {
    ...state,
    player2Score: state.player2Score + 1
  }
);

const setServer = (state) => {
  const { player1Score, player2Score, player1Serving } = state;

  let changeServer = 5;

  if ((player1Score >= 20) && (player2Score >= 20)) {
    changeServer = 2;
  }

  return (
    {
      ...state,
      player1Serving: (player1Score + player2Score) % changeServer === 0 ? !player1Serving : player1Serving
    }
  )
}

const winningPlayer = (state) => {
  if ((state.player1Score >= 21) && (state.player1Score - state.player2Score >= 2)) {
    return (
      {
        ...state,
        winner: "1",
        previousGames: [
          ...state.previousGames,
          {
            player1: {
              score: state.player1Score,
              won: true
            },
            player2: {
              score: state.player2Score,
              won: false
            }
          }
        ]
      }
    )
  }
  if ((state.player2Score >= 21) && (state.player2Score - state.player1Score >= 2)) {
    return (
      {
        ...state,
        winner: "2",
        previousGames: [
          ...state.previousGames,
          {
            player1: {
              score: state.player1,
              won: false
            },
            player2: {
              score: state.player2,
              won: true
            }
          }
        ]
      }
    )
  }
  return (
    {
      ...state,
      winner: ""
    }
  )
}


const reducer = (state, action) => {
  switch (action.type) {
    case "PLAYER1_SCORES": return winningPlayer(setServer(player1Scores(state)));
    case "PLAYER2_SCORES": return winningPlayer(setServer(player2Scores(state)));
    case "RESET": return {
      ...initial,
      previousGames: state.previousGames,
    };
    default: return state;
  }
};

export default reducer;