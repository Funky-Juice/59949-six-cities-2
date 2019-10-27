import PropTypes from 'prop-types';
import {Fragment} from 'react';
import MainScreen from '../main-screen/main-screen';

const getPageScreen = (props) => {
  switch (location.pathname) {
    case `/`:
      return <MainScreen offers={props.offers}/>;
    case `/second-page`:
      return <h1>second-page</h1>;
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
