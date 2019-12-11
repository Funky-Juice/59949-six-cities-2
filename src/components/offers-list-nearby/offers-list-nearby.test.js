import renderer from 'react-test-renderer';
import offerTestObj from '../../mocks/test-offer';
import OffersListNearby from './offers-list-nearby';

const mockOffer = offerTestObj;

it(`OffersListNearby correctly renders`, () => {
  const tree = renderer
    .create(<OffersListNearby
      activeOffer={mockOffer}
      activeOffers={[mockOffer]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
