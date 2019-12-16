import {connect} from 'react-redux';
import MainScreen from './main-screen';
import ActionCreator from '../../store/actions';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    offers: state.offers,
    activeCity: state.activeCity,
    activeOffers: state.activeOffers
  });
};

const mapDispatchToProps = (dispatch) => ({
  getOffers: () => dispatch(ActionCreator.getOffers()),
  clearAllOffers: () => dispatch(ActionCreator.clearAllOffers())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
