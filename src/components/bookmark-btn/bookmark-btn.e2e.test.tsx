import {shallow} from 'enzyme';
import offerTestObj from '../../mocks/test-offer';
import BookmarkBtn from './bookmark-btn';

const isVisible = offerTestObj.is_favorite;
const promise = Promise.resolve(offerTestObj);

const mockParams = {
  id: offerTestObj.id,
  status: isVisible ? 0 : 1
};

it(`BookmarkBtn onClick returns offer id and call correct CB's`, () => {
  const className = `someClassName`;
  const deleteOfferCB = jest.fn();
  const setBookmarkCB = jest.fn((data: object) => promise);
  const onVisibleChangeCB = jest.fn();

  const wrapper = shallow(<BookmarkBtn
    offer={offerTestObj}
    btnClass={className}
    isVisible={isVisible}
    deleteOffer={deleteOfferCB}
    setBookmark={setBookmarkCB}
    onVisibleChange={onVisibleChangeCB}
  />);

  const bookmarkBtn = wrapper.find(`button.${className}__bookmark-button`);
  bookmarkBtn.simulate(`click`);

  expect(setBookmarkCB).toHaveBeenCalled();
  expect(setBookmarkCB.mock.calls[0][0]).toEqual(mockParams);

  return setBookmarkCB(mockParams).then(() => {
    expect(onVisibleChangeCB).toHaveBeenCalled();
    expect(onVisibleChangeCB.mock.calls[0][0]).toEqual(offerTestObj.is_favorite);
  });
});
