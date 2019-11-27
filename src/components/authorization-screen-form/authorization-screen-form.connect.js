import {connect} from 'react-redux';
import ActionCreator from '../../store/actions';
import AuthorizationScreenForm from './authorization-screen-form';

const mapDispatchToProps = (dispatch) => ({
  onAuth: (authData) => dispatch(ActionCreator.authUser(authData))
});

export default connect(null, mapDispatchToProps)(AuthorizationScreenForm);
