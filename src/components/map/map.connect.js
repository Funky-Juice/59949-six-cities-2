import {connect} from 'react-redux';
import Map from './map';


const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    activeCity: state.activeCity,
    activeOffers: state.activeOffers
  });
};

export default connect(mapStateToProps)(Map);
