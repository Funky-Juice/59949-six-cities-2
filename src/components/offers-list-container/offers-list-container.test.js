import renderer from 'react-test-renderer';
import OffersListContainer from './offers-list-container';
import offerTestObj from '../../mocks/test-offer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const mockOffers = [offerTestObj];

const store = createStore(() => ({
  activeCity: mockOffers[0].city,
  activeOffers: mockOffers
}));

it(`OffersListContainer correctly renders`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <OffersListContainer
        activeCity={mockOffers[0].city}
        activeOffers={mockOffers}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
