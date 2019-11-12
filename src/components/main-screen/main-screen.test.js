import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import offerTestObj from '../../mocks/test-offer';
import MainScreen from './index';


const mockOffers = [offerTestObj];
const createNodeMock = () => document.createElement(`div`);

const store = createStore(() => ({
  activeCity: mockOffers[0].city,
  activeOffers: mockOffers
}));

it(`MainScreen correctly renders`, () => {
  const options = {createNodeMock};
  const tree = renderer
    .create(<Provider store={store}>
      <MainScreen
        offers={mockOffers}
      />
    </Provider>, options)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
