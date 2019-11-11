import renderer from 'react-test-renderer';
import offerTestObj from '../../mocks/test-offer';
import {CitiesList} from './cities-list';

const mockOffers = [offerTestObj];

it(`CitiesList correctly renders`, () => {
  const tree = renderer
    .create(<CitiesList
      offers={mockOffers}
      setActiveCity={() => {}}
      setActiveOffers={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
