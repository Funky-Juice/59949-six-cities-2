import {BrowserRouter as Router} from 'react-router-dom';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AuthorizationScreenForm from './authorization-screen';
import userTestObj from '../../mocks/test-user';

const store = createStore(() => ({
  user: userTestObj
}));

it(`AuthorizationScreenForm correctly renders`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <Router>
        <AuthorizationScreenForm/>
      </Router>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
