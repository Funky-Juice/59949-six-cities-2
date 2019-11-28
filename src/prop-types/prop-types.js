/* eslint-disable camelcase */
export const offerPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  preview_image: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  is_premium: PropTypes.bool.isRequired,
  is_favorite: PropTypes.bool.isRequired,
  description: PropTypes.string,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    })
  }).isRequired,
  host: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  }).isRequired
}).isRequired;

export const userPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  is_pro: PropTypes.bool.isRequired
}).isRequired;
/* eslint-enable */
