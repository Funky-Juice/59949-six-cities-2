import renderer from 'react-test-renderer';
import PageHeader from './page-header';
import userTestObj from '../../mocks/test-user';

it(`PageHeader correctly renders`, () => {
  const tree = renderer
    .create(<PageHeader user={userTestObj}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
