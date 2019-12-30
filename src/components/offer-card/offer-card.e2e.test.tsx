import {shallow} from 'enzyme';
import offerTestObj from '../../mocks/test-offer';
import OfferCard from './offer-card';

const mockOffer = offerTestObj;

it(`OfferCard onMouseEnter returns offer id`, () => {
  const showOfferCB = jest.fn();
  const wrapper = shallow(<OfferCard
    offer={mockOffer}
    showOffer={showOfferCB}
  />);

  const offerCard = wrapper.find(`article.cities__place-card`);

  offerCard.simulate(`mouseenter`);

  expect(showOfferCB).toHaveBeenCalledTimes(1);
  expect(showOfferCB.mock.calls[0][0]).toEqual(mockOffer.id);
});
