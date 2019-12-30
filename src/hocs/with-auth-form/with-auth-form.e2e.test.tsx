import {shallow} from 'enzyme';
import withAuthForm from './with-auth-form';

describe(`HOC withAuthForm should work correctly`, () => {
  let wrapper;
  const MockComponent = () => <form/>;
  const MockComponentWrapped = withAuthForm(MockComponent);
  const promise = Promise.resolve();
  const onAuthCB = jest.fn((authData) => promise);
  const evt = {
    preventDefault: jest.fn(),
    target: {
      elements: [
        {name: `email`, value: `test@mail.com`},
        {name: `password`, value: `qwerty`}
      ]
    }
  };

  beforeEach(() => {
    wrapper = shallow(<MockComponentWrapped
      onAuth={onAuthCB}
    />);
  });

  it(`Initial state should be on default...`, () => {
    expect(wrapper.state()).toEqual({
      isLocked: false,
      message: null
    });
  });

  it(`Should set isLocked state 'true' on form submit handler`, () => {
    wrapper.instance()._handleFormSubmit(evt);
    expect(wrapper.state().isLocked).toBe(true);
  });

  it(`Should reset message state to null on form submit handler`, () => {
    wrapper.setState({message: `error text`});
    expect(wrapper.state().message).toBe(`error text`);

    wrapper.instance()._handleFormSubmit(evt);
    expect(wrapper.state().message).toBe(null);
  });

  it(`Should call onAuthCB on form submit handler`, () => {
    const mockData = {
      email: `test@mail.com`,
      password: `qwerty`
    };

    wrapper.instance()._handleFormSubmit(evt);
    expect(onAuthCB).toHaveBeenCalled();
    expect(onAuthCB.mock.calls[0][0]).toEqual(mockData);
  });
});
