import ActionType from './action-types';

const initialState = {
  user: {},
  offers: null,
  reviews: null,
  activeCity: {},
  activeOffers: [],
  errorMessage: null,
  activeOfferId: null,
  favoriteOffers: null,
  isAuthorizationRequired: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_USER: return Object.assign({}, state, {
      user: action.payload
    });

    case ActionType.SET_OFFERS: return Object.assign({}, state, {
      offers: action.payload
    });

    case ActionType.REMOVE_ALL_OFFERS: return Object.assign({}, state, {
      offers: null,
      activeOffers: [],
      favoriteOffers: null
    });

    case ActionType.SET_REVIEWS: return Object.assign({}, state, {
      reviews: action.payload
    });

    case ActionType.SET_ERROR: return Object.assign({}, state, {
      errorMessage: action.payload
    });

    case ActionType.SET_ACTIVE_CITY: return Object.assign({}, state, {
      activeCity: action.payload
    });

    case ActionType.SET_ACTIVE_OFFERS: return Object.assign({}, state, {
      activeOffers: action.payload
    });

    case ActionType.SET_ACTIVE_OFFER_ID: return Object.assign({}, state, {
      activeOfferId: action.payload
    });

    case ActionType.REQUIRED_AUTHORIZATION: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload,
    });

    case ActionType.SET_FAVORITE_OFFERS: return Object.assign({}, state, {
      favoriteOffers: action.payload,
    });

    case ActionType.REMOVE_FAVORITE_OFFER: return Object.assign({}, state, {
      favoriteOffers: state.favoriteOffers.filter((offer) => offer.id !== action.payload),
    });
  }

  return state;
};

export default reducer;
