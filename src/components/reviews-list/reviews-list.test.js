import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reviewTestObj from '../../mocks/test-review';
import offerTestObj from '../../mocks/test-offer';
import ReviewsList from './reviews-list';

const mockReviews = [reviewTestObj];
const mockOffer = offerTestObj;

const store = createStore(() => ({}));

it(`ReviewsList correctly renders`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <ReviewsList
        offer={mockOffer}
        reviews={mockReviews}
        getReviews={() => {}}
        isAuthorizationRequired={false}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
