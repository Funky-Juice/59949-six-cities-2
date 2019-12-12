import {connect} from 'react-redux';
import ReviewsForm from './reviews-form';
import ActionCreator from '../../store/actions';

const mapDispatchToProps = (dispatch) => ({
  sendReview: (data) => dispatch(ActionCreator.sendReview(data))
});

export default connect(null, mapDispatchToProps)(ReviewsForm);
