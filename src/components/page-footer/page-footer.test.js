import renderer from 'react-test-renderer';
import PageFooter from './page-footer';

it(`PageHeader correctly renders`, () => {
  const tree = renderer
    .create(<PageFooter/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
