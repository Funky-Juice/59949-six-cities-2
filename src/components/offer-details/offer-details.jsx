import {offerPropTypes} from '../../prop-types/prop-types';
import {calcRatingPercent} from '../../utils/utils';

const OfferDetails = (props) => {
  const {offer} = props;

  if (!offer) {
    return <></>;
  }

  return <section className="property">
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {offer.images.map((img, i) =>
          i < 6 && (
            <div className="property__image-wrapper" key={`img-${offer.id}-${i}`}>
              <img className="property__image" src={img} alt={`img`}></img>
            </div>)
        )}
      </div>
    </div>

    <div className="property__container container">
      <div className="property__wrapper">
        {offer.is_premium && <div className="property__mark">
          <span>Premium</span>
        </div>}

        <div className="property__name-wrapper">
          <h1 className="property__name">
            {offer.title}
          </h1>
          <button className={`property__bookmark-button ${offer.is_favorite ? `property__bookmark-button--active` : ``} button`} type="button">
            <svg className="property__bookmark-icon" width="31" height="33">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{offer.is_favorite ? `In bookmarks` : `To bookmarks`}</span>
          </button>
        </div>
        <div className="property__rating rating">
          <div className="property__stars rating__stars">
            <span style={{width: `${calcRatingPercent(offer.rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="property__rating-value rating__value">{offer.rating}</span>
        </div>

        <ul className="property__features">
          <li className="property__feature property__feature--bedrooms">
            {offer.bedrooms} Bedrooms
          </li>
          <li className="property__feature property__feature--adults">
            Max {offer.max_adults} adults
          </li>
        </ul>

        <div className="property__price">
          <b className="property__price-value">&euro;{offer.price}</b>
          <span className="property__price-text">&nbsp;night</span>
        </div>

        {offer.goods.length > 0 && <div className="property__inside">
          <h2 className="property__inside-title">What&apos;s inside</h2>
          <ul className="property__inside-list">
            {offer.goods.map((item, i) =>
              <li className="property__inside-item" key={`item-${offer.id}-${i}`}>
                {item}
              </li>
            )}
          </ul>
        </div>}

        <div className="property__host">
          <h2 className="property__host-title">Meet the host</h2>
          <div className="property__host-user user">
            <div className={`property__avatar-wrapper ${offer.host.status === `Pro` ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
              <img className="property__avatar user__avatar" src={`${offer.host.avatar_url ? offer.host.avatar_url : `img/avatar.svg`}`}
                width="74"
                height="74"
                alt="Host avatar"></img>
            </div>
            <span className="property__user-name">
              {offer.host.name}
            </span>
            <span className="property__user-status">
              {offer.host.status}
            </span>
          </div>
          <div className="property__description">{offer.description}</div>
        </div>
      </div>
    </div>
  </section>;
};

OfferDetails.propTypes = {
  offer: offerPropTypes
};

export default OfferDetails;
