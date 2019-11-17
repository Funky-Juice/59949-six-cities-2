
export const offerPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  type: PropTypes.oneOf([`Apartment`, `Room`, `House`, `Hotel`]).isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
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
    avatar: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  }).isRequired
}).isRequired;
