import { connect } from 'react-redux';
import Winner from './Winner';

const mapStateToProps = (state) => {
  let winner = "";
  if (state.player_1.won) {
    winner = state.player_1.name;
  }
  if (state.player_2.won) {
    winner = state.player_2.name;
  }
  return {
    winner: winner
  }
}

export default connect(mapStateToProps)(Winner);