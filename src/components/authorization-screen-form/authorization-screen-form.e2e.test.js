import {mount} from 'enzyme';
import AuthorizationScreenForm from './authorization-screen-form';

it(`AuthorizationScreenForm on form submit returns correct data`, () => {
  const answerCB = jest.fn();
  const mockObj = {
    email: `Oliver.conner@gmail.com`,
    password: `123456`
  };

  const wrapper = mount(<AuthorizationScreenForm
    onAuth={answerCB}
  />);

  const form = wrapper.find(`form.login__form`);

  const emailInput = form.find(`input`).at(0).getDOMNode();
  const passwordInput = form.find(`input`).at(1).getDOMNode();

  emailInput.value = `Oliver.conner@gmail.com`;
  passwordInput.value = `123456`;

  form.simulate(`submit`, {
    preventDefault: () => {}
  });

  expect(answerCB).toHaveBeenCalledTimes(1);
  expect(answerCB.mock.calls[0][0]).toMatchObject(mockObj);
});
