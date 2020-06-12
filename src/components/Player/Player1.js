import { connect } from 'react-redux';
import Player from './Player';
import { player1Scores } from '../../data/actions';

const mapStateToProps = (state) => {
  return {
    playerName: state.player_1.name,
    score: state.player1Score,
    winner: state.winner,
    serving: state.player1Serving,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch(player1Scores())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
