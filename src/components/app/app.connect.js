import {connect} from 'react-redux';
import App from './app';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    user: state.user,
    offers: state.offers,
    errorMessage: state.errorMessage,
    favoriteOffers: state.favoriteOffers,
    isAuthorizationRequired: state.isAuthorizationRequired
  });
};

export default connect(mapStateToProps)(App);
