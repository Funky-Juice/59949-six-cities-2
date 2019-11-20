import renderer from 'react-test-renderer';
import PageHeader from './page-header';

it(`PageHeader correctly renders`, () => {
  const tree = renderer
    .create(<PageHeader/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
