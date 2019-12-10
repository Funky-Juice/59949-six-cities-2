import {reviewPropTypes} from '../../prop-types/prop-types';
import {calcRatingPercent} from '../../utils/utils';

const ReviewsItem = (props) => {
  const {review} = props;

  const reviewDate = new Date(review.date);
  const reviewYear = reviewDate.getFullYear();
  const reviewMonth = reviewDate.toLocaleString(`en`, {month: `long`});

  return <>
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={`${review.user.avatar_url ? review.user.avatar_url : `img/avatar.svg`}`}
            width="54" height="54"
            alt="Reviews avatar"
          ></img>
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>

      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${calcRatingPercent(review.rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <p className="reviews__text">{review.comment}</p>

        <time className="reviews__time" dateTime="2019-04-24">{reviewMonth} {reviewYear}</time>
      </div>
    </li>
  </>;
};

ReviewsItem.propTypes = {
  review: reviewPropTypes
};

export default ReviewsItem;
