import {mount} from 'enzyme';
import withMap from './with-map';

describe(`HOC withMap should work correctly`, () => {
  const className = `cities`;
  const MockComponent = () => <div/>;
  const MockComponentWrapped = withMap(MockComponent);

  const wrapper = mount(<MockComponentWrapped mapClass={className}/>);

  it(`Map container correctly renders`, () => {
    expect(wrapper.exists(`.${className}__map.map`)).toEqual(true);
  });

  it(`Map correctly renders`, () => {
    expect(wrapper.find(`.leaflet-container`)).toBeTruthy();
  });
});
