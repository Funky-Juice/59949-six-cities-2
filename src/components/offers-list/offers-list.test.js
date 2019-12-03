import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import offerTestObj from '../../mocks/test-offer';
import OffersList from './offers-list';
import {createStore} from "redux";
import {Provider} from "react-redux";

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
