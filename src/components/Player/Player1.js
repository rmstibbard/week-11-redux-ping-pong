import { connect } from 'react-redux';
import Player from './Player';

const mapStateToProps = (state) => {
  return {
    playerName: "Player 1",
    score: state.player1,
    winner: state.winner,
    serving: state.player1Serving
  }
}

export default connect(mapStateToProps)(Player);