import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import offerTestObj from '../../mocks/test-offer';
import FavoriteOfferCard from './favorite-offer-card';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const mockOffer = offerTestObj;
const store = createStore(() => ({}));

it(`FavoriteOfferCard correctly renders`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <Router>
        <FavoriteOfferCard
          offer={mockOffer}
        />
      </Router>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
