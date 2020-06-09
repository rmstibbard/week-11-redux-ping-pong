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