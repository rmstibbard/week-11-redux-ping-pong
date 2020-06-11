import { connect } from 'react-redux';
import Player from './Player';
import { player2Scores } from '../../data/actions';

const mapStateToProps = (state) => {
  return {
    playerName: state.player2Name,
    score: state.player2Score,
    winner: state.winner,
    serving: !state.player1Serving
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch(player2Scores())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Player);
