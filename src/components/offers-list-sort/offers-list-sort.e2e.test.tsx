import {shallow} from 'enzyme';
import OffersListSort from './offers-list-sort';
import offerTestObj from '../../mocks/test-offer';

describe(`OffersListSort works correctly`, () => {
  let wrapper;
  let onItemClickCB;
  let onVisibleResetCB;
  let onVisibleChangeCB;
  let setActiveOffersCB;

  beforeEach(() => {
    onItemClickCB = jest.fn();
    onVisibleResetCB = jest.fn();
    onVisibleChangeCB = jest.fn();
    setActiveOffersCB = jest.fn();

    wrapper = shallow(<OffersListSort
      isVisible={false}
      activeItem={-1}
      activeCity={offerTestObj.city}
      activeOffers={[offerTestObj]}
      onItemClick={onItemClickCB}
      onVisibleReset={onVisibleResetCB}
      onVisibleChange={onVisibleChangeCB}
      setActiveOffers={setActiveOffersCB}
    />);
  });

  it(`Active sorting type name onClick calls onVisibleChangeCB with correct isVisible param`, () => {
    const sortingType = wrapper.find(`form .places__sorting-type`);
    const isVisible = false;

    sortingType.simulate(`click`);

    expect(onVisibleChangeCB).toHaveBeenCalledTimes(1);
    expect(onVisibleChangeCB.mock.calls[0][0]).toEqual(!isVisible);
  });

  it(`Sorting option onClick calls onItemClickCB with correct option index`, () => {
    const optionIndex = 1;
    const sortOption = wrapper.find(`.places__option`).at(optionIndex);

    sortOption.simulate(`click`);

    expect(onItemClickCB).toHaveBeenCalledTimes(1);
    expect(onItemClickCB.mock.calls[0][0]).toEqual(optionIndex);
  });

  it(`Sorting option onClick calls onVisibleChangeCB with correct isVisible param`, () => {
    const sortOption = wrapper.find(`.places__option`).at(0);
    const isVisible = false;

    sortOption.simulate(`click`);

    expect(onVisibleChangeCB).toHaveBeenCalledTimes(1);
    expect(onVisibleChangeCB.mock.calls[0][0]).toEqual(isVisible);
  });
});
