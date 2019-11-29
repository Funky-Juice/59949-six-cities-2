import ActionCreator from '../../store/actions';
import {connect} from 'react-redux';
import OffersListSort from './offers-list-sort';

const mapDispatchToProps = (dispatch) => ({
  setActiveOffers: (offers) => dispatch(ActionCreator.setActiveOffers(offers))
});

export default connect(null, mapDispatchToProps)(OffersListSort);
