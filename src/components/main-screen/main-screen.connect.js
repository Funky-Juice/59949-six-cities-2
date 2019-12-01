import {connect} from 'react-redux';
import MainScreen from './main-screen';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    offers: state.offers,
    activeCity: state.activeCity,
    activeOffers: state.activeOffers
  });
};

export default connect(mapStateToProps)(MainScreen);
