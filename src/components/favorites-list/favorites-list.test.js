import renderer from 'react-test-renderer';
import offerTestObj from '../../mocks/test-offer';
import FavoritesList from './favorites-list';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const mockOffers = [offerTestObj];
const store = createStore(() => ({}));

it(`FavoritesList correctly renders`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <FavoritesList
        favoriteOffers={mockOffers}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
