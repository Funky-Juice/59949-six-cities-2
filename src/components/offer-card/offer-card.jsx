import withVisibleState from '../../hocs/with-visible-state/with-visible-state';
import {offerPropTypes} from '../../prop-types/prop-types';
import {calcRatingPercent} from '../../utils/utils';
import {Link} from 'react-router-dom';
import BookmarkBtn from '../bookmark-btn';

const BookmarkBtnWrapped = withVisibleState(BookmarkBtn);

const OfferCard = (props) => {
  const {offer, showOffer} = props;

  return <>
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => (showOffer(offer.id))}
    >
      {offer.is_premium && <>
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      </>}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.preview_image} width="260" height="200" alt="Place image"></img>
        </a>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <BookmarkBtnWrapped
            offer={offer}
            btnClass={`place-card`}
          />
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${calcRatingPercent(offer.rating)}%`}}>{offer.rating}</span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>

        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  </>;
};

OfferCard.propTypes = {
  offer: offerPropTypes,
  showOffer: PropTypes.func.isRequired
};

export default OfferCard;
