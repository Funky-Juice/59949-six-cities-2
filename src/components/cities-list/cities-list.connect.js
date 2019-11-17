import ActionCreator from '../../store/actions';
import {connect} from 'react-redux';
import CitiesList from './cities-list';

const mapDispatchToProps = (dispatch) => ({
  setActiveCity: (city) => dispatch(ActionCreator.setActiveCity(city)),
  setActiveOffers: (offers) => dispatch(ActionCreator.setActiveOffers(offers))
});

export default connect(null, mapDispatchToProps)(CitiesList);
