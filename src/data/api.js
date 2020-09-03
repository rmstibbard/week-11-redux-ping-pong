// import axios with configuration
import axios from "../axios";
import { saveGameData } from './actions';

export const postGame = (
  {
    player_1,
    player_2,
    winning_score,
    change_serve
  }
) => {
  console.log(player_1, player_2, winning_score, change_serve);
  return (dispatch) => {
    // now use axios to make an API request
    axios.post("/games",
      {
        player_1: player_1,
        player_2: player_2,
        winning_score: winning_score,
        change_serve: change_serve
      }

    ).then(({ data }) => {
      dispatch(saveGameData(data.data))
    });
  };
};

export const patchGame = (player_id) => {
  return (dispatch, getState) => {
    let id = getState().id;
    axios.patch(`/games/${id}/score`,
      {
        player: player_id
      }).then(({ data }) => {
        dispatch(saveGameData(data.data))
      });
  }
}