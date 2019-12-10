import renderer from 'react-test-renderer';
import offerTestObj from '../../mocks/test-offer';
import OfferDetails from './offer-details';
import {createStore} from 'redux';
import {Provider} from "react-redux";

const mockOffer = offerTestObj;
const store = createStore(() => ({}));

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
