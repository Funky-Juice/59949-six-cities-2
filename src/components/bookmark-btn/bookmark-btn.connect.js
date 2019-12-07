import {connect} from 'react-redux';
import ActionCreator from '../../store/actions';
import BookmarkBtn from './bookmark-btn';

const mapDispatchToProps = (dispatch) => ({
  deleteOffer: (id) => dispatch(ActionCreator.deleteOffer(id)),
  setBookmark: (data) => dispatch(ActionCreator.setBookmark(data))
});

export default connect(null, mapDispatchToProps)(BookmarkBtn);
