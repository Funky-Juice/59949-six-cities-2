import {connect} from 'react-redux';
import PageHeader from './page-header';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    user: state.user
  });
};

export default connect(mapStateToProps)(PageHeader);
