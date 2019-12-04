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
  }),

  getOffers: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.setOffers(response.data));
      });
  },

  setOffers: (payload = []) => {
    return {
      type: types.SET_OFFERS,
      payload,
    };
  },

  requireAuthorization: (status) => {
    return {
      type: types.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },

  getUser: () => (dispatch, _getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.setUser(response.data));
      });
  },

  authUser: (data) => (dispatch, _getState, api) => {
    return api.post(`/login`, data)
      .then((response) => {
        dispatch(ActionCreator.setUser(response.data));
        dispatch(ActionCreator.requireAuthorization(false));
        location.pathname = `/`;
      });
  },

  setUser: (payload = {}) => {
    return {
      type: types.SET_USER,
      payload,
    };
  },

  setBookmark: (data) => (dispatch, _getState, api) => {
    return api.post(`/favorite/${data.id}/${data.status}`)
      .then((response) => {
        dispatch(ActionCreator.setOfferBookmark(response.data));
        return response.data;
      });
  },

  setOfferBookmark: (payload = {}) => {
    return {
      type: types.SET_OFFER_BOOKMARK,
      payload,
    };
  },

  getFavoriteOffers: () => (dispatch, _getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.setFavoriteOffers(response.data));
        return response.data;
      });
  },

  setFavoriteOffers: (payload = {}) => {
    return {
      type: types.SET_FAVORITE_OFFERS,
      payload,
    };
  }
};

export default ActionCreator;
