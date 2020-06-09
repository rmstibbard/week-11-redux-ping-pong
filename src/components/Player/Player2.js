import { connect } from 'react-redux';
import Player from './Player';

const mapStateToProps = (state) => {
  return {
    playerName: "Player 2",
    score: state.player2,
    winner: state.winner,
    serving: !state.player1Serving
  }
}

export default connect(mapStateToProps)(Player);