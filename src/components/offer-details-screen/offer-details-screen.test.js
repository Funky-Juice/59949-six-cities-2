import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import offerTestObj from '../../mocks/test-offer';
import OfferDetailsScreen from './offer-details-screen';

const mockOffers = [offerTestObj];

const store = createStore(() => ({
  offers: mockOffers,
  activeOffers: mockOffers,
  activeCity: mockOffers[0].city
}));

const match = {
  params: {id: mockOffers[0].id}
};

it(`OfferDetailsScreen correctly renders`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <OfferDetailsScreen
        offers={mockOffers}
        getOffers={() => {}}
        match={match}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
