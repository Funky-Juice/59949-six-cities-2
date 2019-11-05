import {offerPropTypes} from '../../prop-types/prop-types';
import {Fragment} from 'react';
import MainScreen from '../main-screen/main-screen';
import OfferDetails from '../offer-details/offer-details';


const getPageScreen = (props) => {
  const path = location.pathname;
  let offerId = null;
  let offer = {};

  if (path.includes(`offer-`)) {
    offerId = path.substring(7);
    offer = props.offers.find(({id}) => id === parseInt(offerId, 10));
  }

  switch (path) {
    case `/`:
      return <MainScreen offers={props.offers}/>;
    case `/offer-${offerId}`:
      return <OfferDetails offer={offer}/>;
    default:
      return <div style={{textAlign: `center`}}>
        <h1>404</h1>
        <h1>Page not found</h1>
      </div>;
  }
};

const App = (props) => {
  return <Fragment>{getPageScreen(props)}</Fragment>;
};

getPageScreen.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default App;
