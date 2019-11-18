import * as types from './action-types';

const ActionCreator = {
  setActiveCity: (payload = {}) => ({
    type: types.SET_ACTIVE_CITY,
    payload
  }),

  setActiveOffers: (payload = []) => ({
    type: types.SET_ACTIVE_OFFERS,
    payload
  }),

  setActiveOfferId: (payload = null) => ({
    type: types.SET_ACTIVE_OFFER_ID,
    payload
  })
};

export default ActionCreator;
