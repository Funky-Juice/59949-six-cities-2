import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';

const App = (props) => {
  const {offers, showOffer} = props;

  return <MainScreen offers={offers} showOffer={showOffer}/>;
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.string).isRequired,
  showOffer: PropTypes.func.isRequired
};

export default App;
