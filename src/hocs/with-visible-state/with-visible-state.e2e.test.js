import {shallow} from 'enzyme';
import withVisibleState from './with-visible-state';
import offerTestObj from '../../mocks/test-offer';

describe(`HOC withVisibleState should work correctly`, () => {
  let wrapper;
  const MockComponent = () => <div/>;
  const MockComponentWrapped = withVisibleState(MockComponent);

  beforeEach(() => {
    wrapper = shallow(<MockComponentWrapped
      activeCity={offerTestObj.city}
    />);
  });

  it(`Visible state should be "false" on default`, () => {
    expect(wrapper.state().isVisible).toBe(false);
  });

  it(`Should set/unset visible state correctly on visible change handler`, () => {
    wrapper.instance()._visibleChangeHandler(false);
    expect(wrapper.state().isVisible).toBe(false);

    wrapper.instance()._visibleChangeHandler(true);
    expect(wrapper.state().isVisible).toBe(true);
  });

  it(`Should reset visible state on active city change`, () => {
    expect(wrapper.state().isVisible).toBe(false);
    expect(wrapper.props().activeCity).toBe(offerTestObj.city);

    wrapper.instance()._visibleChangeHandler(true);
    expect(wrapper.state().isVisible).toBe(true);

    wrapper.setProps({activeCity: {id: 2}});
    expect(wrapper.state().isVisible).toBe(false);
  });
});
