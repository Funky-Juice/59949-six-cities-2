import {offerPropTypes} from '../../prop-types/prop-types';
import {getNoun} from '../../utils/utils';

import OffersList from '../offers-list/index';
import CitiesList from '../cities-list/cities-list';
import Map from '../map';

const MainScreen = (props) => {
  const {offers, activeCity, activeOffers} = props;

  return <>
    <main className="page__main page__main--index">
      <CitiesList offers={offers}/>

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            {activeCity.name && activeOffers.length && <>
              <b className="places__found">
                {activeOffers.length}&nbsp;
                {getNoun(activeOffers.length, `place`, `places`, `places`)} to stay in {activeCity.name}
              </b>
            </>}

            <OffersList/>
          </section>

          <div className="cities__right-section">
            <Map/>
          </div>
        </div>
      </div>
    </main>
  </>;
};


MainScreen.propTypes = {
  activeCity: PropTypes.object.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  activeOffers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default MainScreen;
