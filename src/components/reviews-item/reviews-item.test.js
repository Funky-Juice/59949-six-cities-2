import renderer from 'react-test-renderer';
import ReviewsItem from './reviews-item';
import reviewTestObj from '../../mocks/test-review';

it(`ReviewsItem correctly renders`, () => {
  const tree = renderer
    .create(<ReviewsItem review={reviewTestObj}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
