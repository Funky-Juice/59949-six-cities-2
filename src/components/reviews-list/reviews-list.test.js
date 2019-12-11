import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list';
import reviewTestObj from '../../mocks/test-review';
import offerTestObj from '../../mocks/test-offer';

const mockReviews = [reviewTestObj];
const mockOffer = offerTestObj;

it(`ReviewsList correctly renders`, () => {
  const tree = renderer
    .create(<ReviewsList
      offer={mockOffer}
      reviews={mockReviews}
      getReviews={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
