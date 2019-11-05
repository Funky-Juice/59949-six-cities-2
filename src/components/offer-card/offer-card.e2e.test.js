import {shallow} from 'enzyme';
import offerTestObj from '../../mocks/test-offer';
import OfferCard from './offer-card';

const mockOffer = offerTestObj;


it(`OfferCard onMouseEnter returns offer object`, () => {
  const showOfferCB = jest.fn();
  const wrapper = shallow(<OfferCard
    offer={mockOffer}
    showOffer={showOfferCB}
    getOfferDetails={() => {}}
  />);

  const offerCard = wrapper.find(`article.cities__place-card`);

  offerCard.simulate(`mouseenter`);

  expect(showOfferCB).toHaveBeenCalledTimes(1);
  expect(showOfferCB.mock.calls[0][0]).toEqual(mockOffer);
});

it(`OfferCard title onClick returns offer id`, () => {
  const getOfferDetailsCB = jest.fn();
  const wrapper = shallow(<OfferCard
    offer={mockOffer}
    showOffer={() => {}}
    getOfferDetails={getOfferDetailsCB}
  />);

  const offerCard = wrapper.find(`.place-card__name`);

  offerCard.simulate(`click`);

  expect(getOfferDetailsCB).toHaveBeenCalledTimes(1);
  expect(getOfferDetailsCB.mock.calls[0][0]).toEqual(mockOffer.id);
});
