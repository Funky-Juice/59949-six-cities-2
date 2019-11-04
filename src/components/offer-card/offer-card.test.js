import renderer from 'react-test-renderer';
import offerTestObj from '../../mocks/test-offer';
import OfferCard from './offer-card';

const mockOffer = offerTestObj;

it(`OfferCard correctly renders`, () => {
  const tree = renderer
    .create(<OfferCard
      offer={mockOffer}
      showOffer={() => {}}
      getOfferDetails={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
