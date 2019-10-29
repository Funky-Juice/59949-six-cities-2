import {shallow} from 'enzyme';
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


it(`OfferCard onMouseEnter returns offer object`, () => {
  const showOfferCB = jest.fn();
  const wrapper = shallow(<OfferCard
    offer={mockOffer}
    showOffer={showOfferCB}
  />);

  const offerCard = wrapper.find(`article.cities__place-card`);

  offerCard.simulate(`mouseenter`);

  expect(showOfferCB).toHaveBeenCalledTimes(1);
  expect(showOfferCB.mock.calls[0][0]).toEqual(mockOffer);
});
