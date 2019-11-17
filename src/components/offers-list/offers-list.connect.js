import {connect} from 'react-redux';
import OffersList from './offers-list';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    activeOffers: state.activeOffers
  });
};

export default connect(mapStateToProps)(OffersList);
