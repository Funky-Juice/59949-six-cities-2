import {Link} from 'react-router-dom';
import {Offer} from '../../types/interfaces';
import {calcRatingPercent} from '../../utils/utils';
import withVisibleState from '../../hocs/with-visible-state/with-visible-state';
import BookmarkBtn from '../bookmark-btn';

const BookmarkBtnWrapped = withVisibleState(BookmarkBtn);

interface Props {
  offer: Offer
  showOffer: (id: number) => void
}

const OfferCard = (props: Props) => {
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
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.preview_image} width="260" height="200" alt="Place image"></img>
        </Link>
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

export default OfferCard;
