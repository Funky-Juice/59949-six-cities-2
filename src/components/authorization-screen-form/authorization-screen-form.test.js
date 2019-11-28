import renderer from 'react-test-renderer';
import AuthorizationScreenForm from './authorization-screen-form';
import userTestObj from '../../mocks/test-user';

it(`AuthorizationScreenForm correctly renders`, () => {
  const tree = renderer
    .create(<AuthorizationScreenForm
      user={userTestObj}
      onAuth={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
