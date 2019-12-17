import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import offerTestObj from '../../mocks/test-offer';
import MainScreen from './main-screen';

const mockOffers = [offerTestObj];

const store = createStore(() => ({
  offers: mockOffers,
  activeOffers: mockOffers,
  activeCity: mockOffers[0].city
}));

it(`MainScreen correctly renders`, () => {
  const fn = jest.fn();
  const tree = renderer
    .create(<Provider store={store}>
      <Router>
        <MainScreen
          offers={mockOffers}
          activeOffers={mockOffers}
          activeCity={mockOffers[0].city}
          getUser={fn}
          getOffers={fn}
          clearAllOffers={fn}
        />
      </Router>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
