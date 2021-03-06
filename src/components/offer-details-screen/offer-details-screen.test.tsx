import * as renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import offerTestObj from '../../mocks/test-offer';
import reviewTestObj from '../../mocks/test-review';
import OfferDetailsScreen from './offer-details-screen';

const mockReviews = [reviewTestObj];
const mockOffers = [offerTestObj];

const store = createStore(() => ({
  offers: mockOffers,
  reviews: mockReviews,
  activeOffers: mockOffers,
  activeCity: mockOffers[0].city,
  isAuthorizationRequired: false
}));

const match = {
  params: {id: mockOffers[0].id}
};

it(`OfferDetailsScreen correctly renders`, () => {
  const cb = jest.fn();
  const tree = renderer
    .create(<Provider store={store}>
      <OfferDetailsScreen
        offers={mockOffers}
        getOffers={() => {}}
        match={match}
        setActiveCity={cb}
        setActiveOfferId={cb}
        setActiveOffers={cb}
        clearAllOffers={cb}
        getUser={cb}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
