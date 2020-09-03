import initial from "./initial";

const saveGameData = (state, { data }) => (
  {
    ...state,
    ...data,
    game_setup: true
  }
)

const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_GAMEDATA": return saveGameData(state, action);
    case "RESET": return {
      ...initial,
      player_1: {
        name: state.player_1.name,
      },
      player_2: {
        name: state.player_2.name,
      },
      winning_score: state.winning_score,
      change_serve: state.change_serve,
      previousGames: state.previousGames,
    };
    default: return state;
  }
};

export default reducer;