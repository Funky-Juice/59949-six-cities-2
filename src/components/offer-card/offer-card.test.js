import renderer from 'react-test-renderer';
import OfferCard from './offer-card';

const mockOffer = {
  type: `Apartment`,
  price: 120,
  title: `Beautiful & luxurious apartment at great location`,
  img: `apartment-01.jpg`,
  rating: 5,
  isPremium: true,
  isFavorite: false
};

it(`OfferCard correctly renders`, () => {
  const tree = renderer
    .create(<OfferCard offer={mockOffer} showOffer={() => {}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
