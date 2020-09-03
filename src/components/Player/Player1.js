import { connect } from 'react-redux';
import Player from './Player';

import { patchGame } from '../../data/api';

const mapStateToProps = (state) => {
  return {
    playerName: state.player_1.name,
    score: state.player_1.score,
    winner: state.player_1.won,
    serving: state.player_1.serving,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch(patchGame(1))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
