import {Link} from 'react-router-dom';
import withVisibleState from '../../hocs/with-visible-state/with-visible-state';
import {offerPropTypes} from '../../prop-types/prop-types';
import {calcRatingPercent} from '../../utils/utils';
import BookmarkBtn from '../bookmark-btn';

const BookmarkBtnWrapped = withVisibleState(BookmarkBtn);

const FavoriteOfferCard = (props) => {
  const {offer} = props;

  return <>
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        {offer.is_premium && <>
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        </>}

        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.preview_image}
            width="150" height="110"
            alt="Place image"
          ></img>
        </Link>
      </div>

      <div className="favorites__card-info place-card__info">
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

FavoriteOfferCard.propTypes = {
  offer: offerPropTypes
};

export default FavoriteOfferCard;
