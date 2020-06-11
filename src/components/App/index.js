import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => {
  return {
    gameSetUp: state.gameSetUp
  }
}

export default connect(mapStateToProps)(App);