import MainScreen from '../main-screen/main-screen';

const App = (props) => {
  const {offers} = props;

  return <MainScreen offers={offers} />;
};

export default App;
