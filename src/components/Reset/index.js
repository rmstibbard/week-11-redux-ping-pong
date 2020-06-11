import { reset } from '../../data/actions';
import { connect } from 'react-redux';
import Reset from './Reset';

const mapDispatchToProps = (dispatch) => {
  return {
    handleReset: () => dispatch(reset())
  }
}

export default connect(null, mapDispatchToProps)(Reset);