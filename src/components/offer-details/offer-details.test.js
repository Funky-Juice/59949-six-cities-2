import renderer from 'react-test-renderer';
import OfferDetails from './offer-details';

const mockOffer = {
  id: 1,
  type: `Apartment`,
  price: 120,
  title: `Beautiful & luxurious apartment at great location`,
  img: `apartment-01.jpg`,
  images: [`apartment-01.jpg`, `apartment-01.jpg`, `apartment-01.jpg`, `apartment-01.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
  features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
  items: [`Wi-Fi`, `Dishwasher`, `Dishwasher`, `Cabel TV`, `Coffee machine`],
  rating: 5,
  isPremium: true,
  isFavorite: false,
  host: {
    avatar: `avatar-angelina.jpg`,
    name: `Angelina`,
    status: `Pro`
  },
  description: `<p>Test markup</p>`
};

it(`OfferDetails correctly renders`, () => {
  const tree = renderer
    .create(<OfferDetails offer={mockOffer}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
