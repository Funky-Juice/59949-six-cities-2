import {offerPropTypes} from '../../prop-types/prop-types';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';

const MainScreen = (props) => {
  const {offers} = props;

  return <div className="cities">
    <div className="cities__places-container container">
      <OffersList offers={offers}/>

      <div className="cities__right-section">
        <Map offers={offers}/>
      </div>
    </div>
  </div>;
};

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default MainScreen;
