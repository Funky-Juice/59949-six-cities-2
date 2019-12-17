import {offerPropTypes, reviewPropTypes} from '../../prop-types/prop-types';
import {sortReviewsByDate} from '../../utils/utils';
import withReviewForm from '../../hocs/with-review-form';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsItem from '../reviews-item/reviews-item';

const ReviewsFormWrapped = withReviewForm(ReviewsForm);
const FIRST_REVIEW_ITEM = 0;
const LAST_REVIEW_ITEM = 10;

const ReviewsList = (props) => {
  let {reviews, offer, getReviews, isAuthorizationRequired} = props;

  if (!reviews) {
    getReviews(offer.id);
    return <></>;
  }

  reviews = sortReviewsByDate(reviews).slice(FIRST_REVIEW_ITEM, LAST_REVIEW_ITEM);

  return <>
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews
        {reviews.length > 0 && <span className="reviews__amount"> &middot;{reviews.length}</span>}
      </h2>

      <ul className="reviews__list">
        {reviews.map((review) =>
          <ReviewsItem
            key={review.id}
            review={review}
          />
        )}
      </ul>

      {!isAuthorizationRequired && <ReviewsFormWrapped offer={offer}/>}
    </section>
  </>;
};

ReviewsList.propTypes = {
  offer: offerPropTypes,
  reviews: PropTypes.arrayOf(reviewPropTypes),
  getReviews: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired
};

export default ReviewsList;
