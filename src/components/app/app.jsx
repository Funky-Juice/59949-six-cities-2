import {offerPropTypes} from '../../prop-types/prop-types';

import PageHeader from '../page-header/page-header';
import OfferDetails from '../offer-details/offer-details';
import MainScreen from '../main-screen';
import SignIn from '../sign-in/sign-in';

const getPageType = () => {
  let path = location.pathname;

  if (path.includes(`offer-`)) {
    path = `/offer`;
  }

  switch (path) {
    case `/`:
      return `main`;
    case `/sign-in`:
      return `login`;
    case `/offer`:
      return `property`;
    default:
      return ``;
  }
};

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
    case `/sign-in`:
      return <SignIn/>;
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
  return <>
    <div className={`page page--gray page--${getPageType()}`}>
      <PageHeader/>
      {getPageScreen(props)}
    </div>
  </>;
};

getPageScreen.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default App;
