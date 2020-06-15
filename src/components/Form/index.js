import { connect } from 'react-redux';
import Form from './Form';
import { postGame } from "../../data/api";

const mapStateToProps = (state) => {
  return {

    player_1: {
      name: state.player_1.name,
      score: state.player_1.score,
      serving: true,
      won: false
    },

    player_2: {
      name: state.player_2.name,
      score: state.player_2.score,
      serving: false,
      won: false
    },

    winning_score: state.winning_score,
    change_serve: state.change_serve
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSave: (data) => dispatch(postGame(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);