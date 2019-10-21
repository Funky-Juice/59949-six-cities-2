import renderer from 'react-test-renderer';
import App from './app';

it(`App correctly renders`, () => {
  const tree = renderer
    .create(<App offers={[`offer`]} showOffer={() => {}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
