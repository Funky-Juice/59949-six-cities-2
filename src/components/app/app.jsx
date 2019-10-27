import PropTypes from 'prop-types';
import {Fragment} from 'react';
import MainScreen from '../main-screen/main-screen';
import OfferDetails from '../offer-details/offer-details';

const getPageScreen = (props) => {
  switch (location.pathname) {
    case `/`:
      return <MainScreen offers={props.offers}/>;
    case `/offer`:
      return <OfferDetails/>;
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
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default App;
