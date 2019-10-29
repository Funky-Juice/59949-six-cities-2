import PropTypes from 'prop-types';

const OfferCard = (props) => {
  const {offer, showOffer, getOfferDetails} = props;

  return <article className="cities__place-card place-card" onMouseEnter={() => (showOffer(offer))}>
    {offer.isPremium && <div className="place-card__mark">
      <span>Premium</span>
    </div>}

    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={`img/${offer.img}`} width="260" height="200" alt="Place image"></img>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button ${offer.isFavorite ? `place-card__bookmark-button--active` : ``} button`} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">{offer.isFavorite ? `In bookmarks` : `To bookmarks`}</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `100%`}}>{offer.rating}</span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name" onClick={() => getOfferDetails(offer.id)}>
        <a href="#">{offer.title}</a>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>;
};

OfferCard.propTypes = {
  offer: PropTypes.object.isRequired,
  showOffer: PropTypes.func.isRequired,
  getOfferDetails: PropTypes.func.isRequired
};

export default OfferCard;
