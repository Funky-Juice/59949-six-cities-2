import {shallow} from 'enzyme';
import CitiesList from './cities-list';
import offerTestObj from '../../mocks/test-offer';

const mockOffers = [offerTestObj];

describe(`CitiesList works correctly`, () => {
  const onItemClickCB = jest.fn();
  const setActiveCityCB = jest.fn();
  const setActiveOffersCB = jest.fn();
  const setActiveOfferIdCD = jest.fn();
  const cityIndex = 0;

  const wrapper = shallow(<CitiesList
    offers={mockOffers}
    activeItem={-1}
    onItemClick={onItemClickCB}
    setActiveCity={setActiveCityCB}
    setActiveOffers={setActiveOffersCB}
    setActiveOfferId={setActiveOfferIdCD}
  />);

  it(`Locations item link onClick returns correct city index`, () => {
    const itemLink = wrapper.find(`.locations__item-link`).at(cityIndex);
    itemLink.simulate(`click`);

    expect(onItemClickCB).toHaveBeenCalledTimes(1);
    expect(onItemClickCB.mock.calls[0][0]).toEqual(cityIndex);
  });
});
