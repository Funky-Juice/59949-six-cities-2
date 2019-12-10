import {connect} from 'react-redux';
import ReviewsList from './reviews-list';
import ActionCreator from '../../store/actions';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    reviews: state.reviews
  });
};

const mapDispatchToProps = (dispatch) => ({
  getReviews: (id) => dispatch(ActionCreator.getReviews(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
