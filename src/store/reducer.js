import * as types from './action-types';

const initialState = {
  offers: [],
  activeCity: {},
  activeOffers: [],
  activeOfferId: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_OFFERS: return Object.assign({}, state, {
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
  }

  return state;
};

export default reducer;
