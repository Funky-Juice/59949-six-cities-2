import {mount} from 'enzyme';
import withMap from './with-map';

describe(`HOC withMap should work correctly`, () => {
  const MockComponent = () => <div/>;
  const MockComponentWrapped = withMap(MockComponent);

  const wrapper = mount(<MockComponentWrapped/>);

  it(`Map container correctly renders`, () => {
    expect(wrapper.exists(`.cities__map`)).toEqual(true);
  });

  it(`Map correctly renders`, () => {
    expect(wrapper.find(`.leaflet-container`)).toBeTruthy();
  });
});
