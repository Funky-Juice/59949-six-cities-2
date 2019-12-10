import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import offerTestObj from '../../mocks/test-offer';
import FavoritesScreen from './favorites-screen';

const mockOffers = [offerTestObj];

const store = createStore(() => ({}));

it(`FavoritesScreen correctly renders`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <FavoritesScreen
        favoriteOffers={mockOffers}
        getFavoriteOffers={() => {}}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`FavoritesScreen correctly renders without any favoriteOffers`, () => {
  const tree = renderer
    .create(<FavoritesScreen
      favoriteOffers={null}
      getFavoriteOffers={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
