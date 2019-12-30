import {shallow} from 'enzyme';
import withActiveItem from './with-active-item';
import offerTestObj from '../../mocks/test-offer';

describe(`HOC withActiveItem should work correctly`, () => {
  let wrapper;
  const MockComponent = () => <div/>;
  const MockComponentWrapped = withActiveItem(MockComponent);

  beforeEach(() => {
    wrapper = shallow(<MockComponentWrapped
      offers={offerTestObj}
      activeCity={offerTestObj.city}
    />);
  });

  it(`ActiveItem ID should be "-1" on default`, () => {
    expect(wrapper.state().activeItem).toBe(-1);
  });

  it(`Should set/unset activeItem ID correctly on item click`, () => {
    wrapper.instance()._itemClickHandler(0);
    expect(wrapper.state().activeItem).toBe(0);

    wrapper.instance()._itemClickHandler(2);
    expect(wrapper.state().activeItem).toBe(2);

    wrapper.instance()._itemClickHandler(-1);
    expect(wrapper.state().activeItem).toBe(-1);
  });

  it(`Should reset activeItem ID on active city change`, () => {
    expect(wrapper.state().activeItem).toBe(-1);
    expect(wrapper.props().activeCity).toBe(offerTestObj.city);

    wrapper.instance()._itemClickHandler(2);
    expect(wrapper.state().activeItem).toBe(2);

    wrapper.setProps({activeCity: {id: 2}});
    expect(wrapper.state().activeItem).toBe(-1);
  });
});
