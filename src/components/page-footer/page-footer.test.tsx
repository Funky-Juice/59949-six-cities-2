import {BrowserRouter as Router} from 'react-router-dom';
import * as renderer from 'react-test-renderer';
import PageFooter from './page-footer';

it(`PageHeader correctly renders`, () => {
  const tree = renderer
    .create(<Router>
      <PageFooter/>
    </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
