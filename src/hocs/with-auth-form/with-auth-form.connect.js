import {connect} from 'react-redux';
import {compose} from 'recompose';
import withAuthForm from './with-auth-form';
import ActionCreator from '../../store/actions';

const mapDispatchToProps = (dispatch) => ({
  onAuth: (authData) => dispatch(ActionCreator.authUser(authData))
});

export default compose(connect(null, mapDispatchToProps), withAuthForm);
