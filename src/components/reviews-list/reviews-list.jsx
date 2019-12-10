import ReviewsItem from '../reviews-item/reviews-item';
import {offerPropTypes} from '../../prop-types/prop-types';

const ReviewsList = (props) => {
  const {reviews, offer, getReviews} = props;

  if (!reviews) {
    getReviews(offer.id);
    return <></>;
  }

  return <>
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">1</span>
      </h2>

      <ul className="reviews__list">
        <ReviewsItem/>
      </ul>
    </section>
  </>;
};

ReviewsList.propTypes = {
  offer: offerPropTypes,
  reviews: PropTypes.arrayOf({}),
  getReviews: PropTypes.func.isRequired
};

export default ReviewsList;
