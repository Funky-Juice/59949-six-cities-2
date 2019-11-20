import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import offerTestObj from '../../mocks/test-offer';
import App from './app';

const mockOffers = [offerTestObj];
const createNodeMock = () => document.createElement(`div`);

const store = createStore(() => ({
  activeCity: mockOffers[0].city,
  activeOffers: mockOffers
}));

it(`App correctly renders`, () => {
  const options = {createNodeMock};
  const tree = renderer
    .create(<Provider store={store}>
      <App
        offers={mockOffers}
      />
    </Provider>, options)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
