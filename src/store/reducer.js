import * as types from './action-types';

const initialState = {
  user: {},
  offers: null,
  activeCity: {},
  activeOffers: [],
  favoriteOffers: null,
  activeOfferId: null,
  isAuthorizationRequired: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER: return Object.assign({}, state, {
      user: action.payload
    });

    case types.SET_OFFERS: return Object.assign({}, state, {
      offers: action.payload
    });

    case types.REMOVE_OFFERS: return Object.assign({}, state, {
      offers: action.payload
    });

    case types.SET_ACTIVE_CITY: return Object.assign({}, state, {
      activeCity: action.payload
    });

    case types.SET_ACTIVE_OFFERS: return Object.assign({}, state, {
      activeOffers: action.payload
    });

    case types.SET_ACTIVE_OFFER_ID: return Object.assign({}, state, {
      activeOfferId: action.payload
    });

    case types.REQUIRED_AUTHORIZATION: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload,
    });

    case types.SET_FAVORITE_OFFERS: return Object.assign({}, state, {
      favoriteOffers: action.payload,
    });

    case types.REMOVE_FAVORITE_OFFER: return Object.assign({}, state, {
      favoriteOffers: state.favoriteOffers.filter((offer) => offer.id !== action.payload),
    });
  }

  return state;
};

export default reducer;
