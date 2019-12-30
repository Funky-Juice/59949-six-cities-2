import * as renderer from 'react-test-renderer';
import BookmarkBtn from './bookmark-btn';
import offerTestObj from '../../mocks/test-offer';

it(`BookmarkBtn correctly renders`, () => {
  const CB = jest.fn();
  const tree = renderer
    .create(<BookmarkBtn
      offer={offerTestObj}
      btnClass={`someClassName`}
      isVisible={true}
      deleteOffer={CB}
      setBookmark={CB}
      onVisibleChange={CB}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
