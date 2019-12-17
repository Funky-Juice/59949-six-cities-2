import {BrowserRouter as Router} from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux';
import {createAPI} from '../../services/api';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import offerTestObj from '../../mocks/test-offer';
import userTestObj from '../../mocks/test-user';
import App from './app';

const mockOffers = [offerTestObj];
const createNodeMock = () => document.createElement(`div`);

const reducer = () => ({
  user: userTestObj,
  offers: mockOffers,
  activeCity: mockOffers[0].city,
  activeOffers: mockOffers
});

const api = createAPI();

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

it(`App correctly renders`, () => {
  const options = {createNodeMock};
  const tree = renderer
    .create(<Provider store={store}>
      <Router>
        <App
          isAuthorizationRequired={false}
          errorMessage={null}
        />
      </Router>
    </Provider>, options)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
