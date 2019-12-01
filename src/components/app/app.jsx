import {offerPropTypes, userPropTypes} from '../../prop-types/prop-types';

import AuthorizationScreen from '../authorization-screen/authorization-screen';
import OfferDetails from '../offer-details/offer-details';
import MainScreen from '../main-screen';
import Layout from '../layout/layout';

const getPageScreen = (props) => {
  const path = location.pathname;
  let offerId = null;
  let offer = {};

  if (path === `/sign-in` && props.user.id) {
    location.pathname = `/`;
  } else if (path.includes(`offer-`)) {
    offerId = path.substring(7);
    offer = props.offers.find(({id}) => id === parseInt(offerId, 10));
  }

  switch (path) {
    case `/`:
      return <MainScreen offers={props.offers}/>;
    case `/sign-in`:
      return <AuthorizationScreen/>;
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
  return <Layout>
    {getPageScreen(props)}
  </Layout>;
};

getPageScreen.propTypes = {
  user: userPropTypes,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

App.propTypes = {
  user: userPropTypes
};

export default App;
