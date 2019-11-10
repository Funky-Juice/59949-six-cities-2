import {offerPropTypes} from '../../prop-types/prop-types';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';

const MainScreen = (props) => {
  const {offers} = props;

  return <>
    <main className="page__main page__main--index">
      <CitiesList offers={offers}/>

      <div className="cities">
        <div className="cities__places-container container">
          <OffersList/>

          <div className="cities__right-section">
            <Map offers={offers}/>
          </div>
        </div>
      </div>
    </main>
  </>;
};

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default MainScreen;
