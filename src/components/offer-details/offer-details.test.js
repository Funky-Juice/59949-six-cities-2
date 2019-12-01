import renderer from 'react-test-renderer';
import offerTestObj from '../../mocks/test-offer';
import OfferDetails from './offer-details';

const mockOffers = [offerTestObj];
const match = {
  params: {id: mockOffers[0].id}
};

it(`OfferDetails correctly renders`, () => {
  const tree = renderer
    .create(<OfferDetails
      offers={mockOffers}
      match={match}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
