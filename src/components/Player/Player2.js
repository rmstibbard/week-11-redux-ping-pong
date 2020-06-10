import { connect } from 'react-redux';
import Player from './Player';

const mapStateToProps = (state) => {
  return {
    playerName: "Player 2",
    score: state.player2Score,
    winner: state.winner,
    serving: !state.player1Serving
  }
}

export default connect(mapStateToProps)(Player);