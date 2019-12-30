import {mount} from 'enzyme';
import AuthorizationScreenForm from './authorization-screen-form';

it(`AuthorizationScreenForm on form submit returns correct data`, () => {
  const onFormSubmitCB = jest.fn();

  const wrapper = mount(<AuthorizationScreenForm
    message={`test`}
    isLocked={false}
    onFormSubmit={onFormSubmitCB}
  />);

  const form = wrapper.find(`form.login__form`);

  form.simulate(`submit`, {
    preventDefault: () => {}
  });

  expect(onFormSubmitCB).toHaveBeenCalledTimes(1);
});
