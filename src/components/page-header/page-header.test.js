import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import PageHeader from './page-header';
import userTestObj from '../../mocks/test-user';

it(`PageHeader correctly renders`, () => {
  const tree = renderer
    .create(<Router>
      <PageHeader user={userTestObj}/>
    </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
