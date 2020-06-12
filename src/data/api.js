// import axios with configuration
import axios from "../axios";
import { saveSettings } from './actions';

export const postGame = (
  {
    player_1,
    player_2,
    winning_score,
    change_serve
  }
) => {
  return (dispatch) => {
    // now use axios to make an API request
    axios.post("/games",
      {
        player_1: player_1.name,
        player_2: player_2.name,
        winning_score: winning_score,
        change_serve: change_serve
      }

    ).then(({ data }) => {
      dispatch(saveSettings(data.data))
    });
  };
};