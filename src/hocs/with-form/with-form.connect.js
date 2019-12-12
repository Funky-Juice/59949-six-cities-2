import {connect} from 'react-redux';
import {compose} from 'recompose';
import withForm from './with-form';
import ActionCreator from '../../store/actions';

const mapDispatchToProps = (dispatch) => ({
  sendReview: (data) => dispatch(ActionCreator.sendReview(data))
});

export default compose(connect(null, mapDispatchToProps), withForm);
