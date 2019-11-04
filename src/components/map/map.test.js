import renderer from 'react-test-renderer';
import Map from './map';

const mockOffers = [{
  id: 2,
  type: `Room`,
  price: 80,
  title: `Wood and stone place`,
  img: `room.jpg`,
  images: [`room.jpg`, `room.jpg`, `room.jpg`, `room.jpg`, `room.jpg`, `room.jpg`],
  features: [`Entire place`],
  items: [`Wi-Fi`],
  rating: 3,
  isPremium: false,
  isFavorite: true,
  host: {
    avatar: `avatar-max.jpg`,
    name: `Max`,
    status: null
  },
  description: null,
  location: {
    latitude: 52.369553943508,
    longitude: 4.85309666406198
  }
}];

export const createNodeMock = () => document.createElement(`div`);


it(`Map correctly renders`, () => {
  const options = {createNodeMock};

  const tree = renderer
    .create(<Map offers={mockOffers}/>, options)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
