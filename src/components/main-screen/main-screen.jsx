import PropTypes from 'prop-types';
import OffersList from '../offers-list/offers-list';

const MainScreen = (props) => {
  const {offers} = props;

  return <div className="cities">
    <div className="cities__places-container container">
      <OffersList offers={offers}/>
    </div>
  </div>;
};

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MainScreen;
