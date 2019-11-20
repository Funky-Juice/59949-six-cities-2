import ActionCreator from '../../store/actions';
import {connect} from 'react-redux';
import OffersList from './offers-list';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    activeOffers: state.activeOffers
  });
};

const mapDispatchToProps = (dispatch) => ({
  setActiveOfferId: (id) => dispatch(ActionCreator.setActiveOfferId(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
