import {offerPropTypes} from '../../prop-types/prop-types';

const OfferDetails = (props) => {
  const {offer} = props;

  return <section className="property">
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {offer.images.map((img, i) =>
          <div className="property__image-wrapper" key={`img-${offer.id}-${i}`}>
            <img className="property__image" src={`img/${img}`} alt={img}></img>
          </div>
        )}
      </div>
    </div>

    <div className="property__container container">
      <div className="property__wrapper">
        {offer.isPremium && <div className="property__mark">
          <span>Premium</span>
        </div>}

        <div className="property__name-wrapper">
          <h1 className="property__name">
            {offer.title}
          </h1>
          <button className={`property__bookmark-button ${offer.isFavorite ? `property__bookmark-button--active` : ``} button`} type="button">
            <svg className="property__bookmark-icon" width="31" height="33">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{offer.isFavorite ? `In bookmarks` : `To bookmarks`}</span>
          </button>
        </div>
        <div className="property__rating rating">
          <div className="property__stars rating__stars">
            <span style={{width: `96%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="property__rating-value rating__value">{offer.rating}</span>
        </div>

        <ul className="property__features">
          {offer.features.map((feature, i) =>
            <li className="property__feature" key={`feature-${offer.id}-${i}`}>
              {feature}
            </li>
          )}
        </ul>

        <div className="property__price">
          <b className="property__price-value">&euro;{offer.price}</b>
          <span className="property__price-text">&nbsp;night</span>
        </div>

        {offer.items.length > 0 && <div className="property__inside">
          <h2 className="property__inside-title">What&apos;s inside</h2>
          <ul className="property__inside-list">
            {offer.items.map((item, i) =>
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
              <img className="property__avatar user__avatar" src={`img/${offer.host.avatar ? offer.host.avatar : `avatar.svg`}`}
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
          <div className="property__description" dangerouslySetInnerHTML={{__html: offer.description}}></div>
        </div>
      </div>
    </div>
  </section>;
};

OfferDetails.propTypes = {
  offer: offerPropTypes
};

export default OfferDetails;
