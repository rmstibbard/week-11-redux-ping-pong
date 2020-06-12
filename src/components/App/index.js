import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => {
  return {
    game_setup: state.game_setup
  }
}

export default connect(mapStateToProps)(App);