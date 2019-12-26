import {FormEvent, ChangeEvent, Fragment} from 'react';

interface Props {
  message: string
  isLocked: boolean
  rating: number
  reviewText: string
  onTextChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onFormSubmit: (event: FormEvent<HTMLFormElement>) => void
  onRatingChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const RATING_INPUTS: {id: number, value: string}[] = [
  {id: 5, value: `perfect`},
  {id: 4, value: `good`},
  {id: 3, value: `not bad`},
  {id: 2, value: `badly`},
  {id: 1, value: `terribly`}
];

const ReviewsForm = (props: Props) => {
  const {rating, message, isLocked, reviewText, onRatingChange, onTextChange, onFormSubmit} = props;

  return <>
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={onFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {RATING_INPUTS.map((it: {id: number; value: string}) =>
          <Fragment key={it.id}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              checked={rating === it.id}
              value={it.id}
              id={`${it.id}-stars`}
              type="radio"
              onChange={onRatingChange}
            ></input>
            <label
              htmlFor={`${it.id}-stars`}
              className="reviews__rating-label form__rating-label"
              title={it.value}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        )}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewText}
        onChange={onTextChange}
      ></textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount"> 50 characters</b>.
        </p>

        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isLocked}
        >Submit
        </button>
      </div>

      <div style={{position: `relative`, fontSize: `14px`, color: `red`}}>
        <p className="reviews__error-message" style={{position: `absolute`}}>
          {message}
        </p>
      </div>
    </form>
  </>;
};

export default ReviewsForm;
