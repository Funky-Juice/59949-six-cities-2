import renderer from 'react-test-renderer';
import ReviewsForm from './reviews-form';

it(`ReviewsForm correctly renders`, () => {
  const CB = jest.fn();
  const tree = renderer
    .create(<ReviewsForm
      rating={0}
      message={null}
      reviewText={``}
      isLocked={false}
      onFormSubmit={CB}
      onRatingChange={CB}
      onTextChange={CB}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
