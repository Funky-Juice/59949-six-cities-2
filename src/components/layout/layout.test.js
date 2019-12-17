import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Layout from './layout';
import userTestObj from '../../mocks/test-user';

const store = createStore(() => ({
  user: userTestObj
}));

const mockNode = <div/>;

it(`Layout correctly renders`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <Router>
        <Layout>{mockNode}</Layout>
      </Router>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
