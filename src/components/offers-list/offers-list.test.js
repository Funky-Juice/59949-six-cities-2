import renderer from 'react-test-renderer';
import OffersList from './offers-list';

it(`OfferCard correctly renders`, () => {
  const tree = renderer
    .create(<OffersList offers={[{}]}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
