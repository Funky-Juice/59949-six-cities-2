import {connect} from 'react-redux';
import ActionCreator from '../../store/actions';
import FavoritesScreen from './favorites-screen';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    favoriteOffers: state.favoriteOffers
  });
};

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(ActionCreator.getUser()),
  getFavoriteOffers: () => dispatch(ActionCreator.getFavoriteOffers())
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
