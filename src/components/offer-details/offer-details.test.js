import renderer from 'react-test-renderer';
import reviewTestObj from '../../mocks/test-review';
import offerTestObj from '../../mocks/test-offer';
import OfferDetails from './offer-details';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const mockReviews = [reviewTestObj];
const mockOffer = offerTestObj;

const store = createStore(() => ({
  reviews: mockReviews,
  activeCity: mockOffer.city,
  activeOffers: [mockOffer],
  isAuthorizationRequired: false
}));

it(`OfferDetails correctly renders`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <OfferDetails
        offer={mockOffer}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
