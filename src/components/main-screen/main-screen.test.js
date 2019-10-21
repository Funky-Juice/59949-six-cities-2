import renderer from 'react-test-renderer';
import MainScreen from './main-screen';

it(`MainScreen correctly renders`, () => {
  const tree = renderer
    .create(<MainScreen offers={[`offer`]} showOffer={() => {}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
