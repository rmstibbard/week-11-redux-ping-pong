import { connect } from 'react-redux';
import PreviousGames from './PreviousGames';

const mapStateToProps = (state) => {
  return {
    previousGames: state.previousGames
  }
}

export default connect(mapStateToProps)(PreviousGames);