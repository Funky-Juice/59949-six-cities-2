import {offerPropTypes, reviewPropTypes} from '../../prop-types/prop-types';
import {sortReviewsByDate} from '../../utils/utils';
import ReviewsItem from '../reviews-item/reviews-item';

const ReviewsList = (props) => {
  let {reviews, offer, getReviews} = props;

  if (!reviews) {
    getReviews(offer.id);
    return <></>;
  }
  if (!reviews.length) {
    return <></>;
  }

  reviews = sortReviewsByDate(reviews).slice(0, 10);

  return <>
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>

      <ul className="reviews__list">
        {reviews.map((review) =>
          <ReviewsItem
            key={review.id}
            review={review}
          />
        )}
      </ul>
    </section>
  </>;
};

ReviewsList.propTypes = {
  offer: offerPropTypes,
  reviews: PropTypes.arrayOf(reviewPropTypes),
  getReviews: PropTypes.func.isRequired
};

export default ReviewsList;
