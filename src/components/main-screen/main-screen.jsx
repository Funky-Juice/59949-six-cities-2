import {offerPropTypes} from '../../prop-types/prop-types';
import {connect} from 'react-redux';

import OffersList from '../offers-list/offers-list';
import CitiesList from '../cities-list/cities-list';
import Map from '../map/map';

const MainScreen = (props) => {
  const {offers, activeCity, activeOffers} = props;

  return <>
    <main className="page__main page__main--index">
      <CitiesList offers={offers}/>

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            {activeCity.name && activeOffers.length && <>
              <b className="places__found">{activeOffers.length} places to stay in {activeCity.name}</b>
            </>}

            <OffersList/>
          </section>

          <div className="cities__right-section">
            <Map offers={offers}/>
          </div>
        </div>
      </div>
    </main>
  </>;
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    activeCity: state.activeCity,
    activeOffers: state.activeOffers
  });
};


MainScreen.propTypes = {
  activeCity: PropTypes.object.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  activeOffers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default connect(mapStateToProps)(MainScreen);
