import renderer from 'react-test-renderer';
import offerTestObj from '../../mocks/test-offer';
import OfferDetails from './offer-details';
import {createStore} from 'redux';
import {Provider} from "react-redux";

const mockOffers = [offerTestObj];
const store = createStore(() => ({}));
const match = {
  params: {id: mockOffers[0].id}
};

it(`OfferDetails correctly renders`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <OfferDetails
        offers={mockOffers}
        match={match}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
