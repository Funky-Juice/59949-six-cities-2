import renderer from 'react-test-renderer';
import ErrorScreen from './error-screen';

const mockMsg = `Test error message`;

it(`ErrorScreen correctly renders`, () => {
  const tree = renderer
    .create(<ErrorScreen
      errorMessage={mockMsg}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
