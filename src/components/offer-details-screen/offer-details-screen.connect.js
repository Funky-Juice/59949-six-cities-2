import {connect} from 'react-redux';
import OfferDetailsScreen from './offer-details-screen';
import ActionCreator from '../../store/actions';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    offers: state.offers
  });
};

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(ActionCreator.getUser()),
  getOffers: () => dispatch(ActionCreator.getOffers()),
  clearAllOffers: () => dispatch(ActionCreator.clearAllOffers()),
  setActiveCity: (city) => dispatch(ActionCreator.setActiveCity(city)),
  setActiveOfferId: (id) => dispatch(ActionCreator.setActiveOfferId(id)),
  setActiveOffers: (offers) => dispatch(ActionCreator.setActiveOffers(offers))
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetailsScreen);
