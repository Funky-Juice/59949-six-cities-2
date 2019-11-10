import * as types from './action-types';


const ActionCreator = {
  setActiveCity: (payload) => ({
    type: types.SET_ACTIVE_CITY,
    payload
  }),

  setActiveOffers: (payload) => ({
    type: types.SET_ACTIVE_OFFERS,
    payload
  })
};

export default ActionCreator;
