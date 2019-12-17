import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import offerTestObj from '../../mocks/test-offer';
import OffersList from './offers-list';

const mockOffers = [offerTestObj];
const store = createStore(() => ({}));

it(`OffersList correctly renders`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <Router>
        <OffersList
          activeOffers={mockOffers}
          setActiveOfferId={() => {}}
        />
      </Router>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
