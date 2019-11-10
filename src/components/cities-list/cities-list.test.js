import renderer from 'react-test-renderer';
import CitiesList from './cities-list';


it(`CitiesList correctly renders`, () => {
  const tree = renderer
    .create(<CitiesList/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
