import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import offerTestObj from '../../mocks/test-offer';
import OfferCard from './offer-card';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const mockOffer = offerTestObj;
const store = createStore(() => ({}));

it(`OfferCard correctly renders`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <Router>
        <OfferCard
          offer={mockOffer}
          showOffer={() => {}}
          getOfferDetails={() => {}}
        />
      </Router>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
