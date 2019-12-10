import {connect} from 'react-redux';
import OfferDetailsScreen from './offer-details-screen';
import ActionCreator from '../../store/actions';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    offers: state.offers
  });
};

const mapDispatchToProps = (dispatch) => ({
  getOffers: () => dispatch(ActionCreator.getOffers())
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetailsScreen);
