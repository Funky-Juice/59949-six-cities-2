import renderer from 'react-test-renderer';
import offerTestObj from '../../mocks/test-offer';
import OfferDetails from './offer-details';

const mockOffer = offerTestObj;

it(`OfferDetails correctly renders`, () => {
  const tree = renderer
    .create(<OfferDetails offer={mockOffer}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
