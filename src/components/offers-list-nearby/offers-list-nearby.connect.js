import {connect} from 'react-redux';
import OffersListNearby from './offers-list-nearby';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    activeOffers: state.activeOffers
  });
};

export default connect(mapStateToProps)(OffersListNearby);
