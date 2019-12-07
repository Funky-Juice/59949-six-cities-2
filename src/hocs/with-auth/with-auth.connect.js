import {connect} from 'react-redux';
import {compose} from 'recompose';
import withAuth from './with-auth';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    favoriteOffers: state.favoriteOffers,
    isAuthorizationRequired: state.isAuthorizationRequired
  });
};

export default compose(connect(mapStateToProps), withAuth);
