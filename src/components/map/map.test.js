import renderer from 'react-test-renderer';
import offerTestObj from '../../mocks/test-offer';
import Map from './map';

const mockOffers = [offerTestObj];

const ref = {
  current: document.createElement(`div`)
};

it(`Map correctly renders`, () => {

  const tree = renderer
    .create(<Map
      mapRef={ref}
      activeOfferId={mockOffers[0].id}
      activeOffers={mockOffers}
      activeCity={mockOffers[0].city}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
