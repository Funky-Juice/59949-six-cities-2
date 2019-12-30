import * as renderer from 'react-test-renderer';
import AuthorizationScreenForm from './authorization-screen-form';

it(`AuthorizationScreenForm correctly renders`, () => {
  const tree = renderer
    .create(<AuthorizationScreenForm
      message={`test`}
      isLocked={false}
      onFormSubmit={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
