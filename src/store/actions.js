import * as types from './action-types';


const ActionCreator = {
  setCity: (payload) => ({
    type: types.SET_CITY,
    payload
  }),

  setOffers: (payload) => ({
    type: types.SET_OFFERS,
    payload
  })
};

export default ActionCreator;
