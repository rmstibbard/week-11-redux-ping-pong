import { connect } from 'react-redux';
import Player from './Player';
import { patchGame } from '../../data/api';

const mapStateToProps = (state) => {
  return {
    playerName: state.player_2.name,
    score: state.player_2.score,
    winner: state.player_2.won,
    serving: state.player_2.serving,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch(patchGame(2))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
