import {mount} from 'enzyme';
import ReviewsForm from './reviews-form';

describe(`ReviewsForm works correctly`, () => {

  it(`Form on submit calls onSubmitCB`, () => {
    const onSubmitCB = jest.fn();
    const CB = jest.fn();

    const wrapper = mount(
        <ReviewsForm
          rating={3}
          message={null}
          reviewText={`test review`}
          isLocked={false}
          onFormSubmit={onSubmitCB}
          onRatingChange={CB}
          onTextChange={CB}
        />
    );

    const form = wrapper.find(`.reviews__form`);
    form.simulate(`submit`);

    expect(onSubmitCB).toHaveBeenCalledTimes(1);
  });

  it(`Rating change calls onRatingChangeCB`, () => {
    const onRatingChangeCB = jest.fn();
    const CB = jest.fn();

    const wrapper = mount(
        <ReviewsForm
          rating={3}
          message={null}
          reviewText={`test review`}
          isLocked={false}
          onFormSubmit={CB}
          onRatingChange={onRatingChangeCB}
          onTextChange={CB}
        />
    );

    const ratingInput = wrapper.find(`input.form__rating-input`).at(2);
    ratingInput.simulate(`change`);

    expect(onRatingChangeCB).toHaveBeenCalledTimes(1);
  });

  it(`Review text on change calls onRatingChangeCB`, () => {
    const onTextChangeCB = jest.fn();
    const CB = jest.fn();

    const wrapper = mount(
        <ReviewsForm
          rating={3}
          message={null}
          reviewText={`test review`}
          isLocked={false}
          onFormSubmit={CB}
          onRatingChange={CB}
          onTextChange={onTextChangeCB}
        />
    );

    const textArea = wrapper.find(`.reviews__textarea`);
    textArea.simulate(`change`);

    expect(onTextChangeCB).toHaveBeenCalledTimes(1);
  });

  it(`Error message block shows error text`, () => {
    const CB = jest.fn();
    const wrapper = mount(
        <ReviewsForm
          rating={3}
          message={`test error message`}
          reviewText={`test review`}
          isLocked={false}
          onFormSubmit={CB}
          onRatingChange={CB}
          onTextChange={CB}
        />
    );

    const errorText = wrapper.find(`.reviews__error-message`).text();
    expect(errorText).toEqual(`test error message`);
  });
});
