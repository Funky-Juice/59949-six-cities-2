import {createBrowserHistory} from 'history';
import ActionType from './action-types';

const history = createBrowserHistory();

const ActionCreator = {
  setActiveCity: (payload = {}) => ({
    type: ActionType.SET_ACTIVE_CITY,
    payload
  }),

  setActiveOffers: (payload = []) => ({
    type: ActionType.SET_ACTIVE_OFFERS,
    payload
  }),

  setActiveOfferId: (payload = null) => ({
    type: ActionType.SET_ACTIVE_OFFER_ID,
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
      type: ActionType.SET_OFFERS,
      payload,
    };
  },

  clearAllOffers: () => {
    return {
      type: ActionType.REMOVE_ALL_OFFERS
    };
  },

  getReviews: (id) => (dispatch, _getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.setReviews(response.data));
      });
  },

  setReviews: (payload = []) => {
    return {
      type: ActionType.SET_REVIEWS,
      payload,
    };
  },

  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },

  getUser: () => (dispatch, _getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.setUser(response.data));
        dispatch(ActionCreator.requireAuthorization(false));
      })
      .catch(() => {
        dispatch(ActionCreator.setUser());
      });
  },

  authUser: (data) => (dispatch, _getState, api) => {
    return api.post(`/login`, data)
      .then((response) => {
        dispatch(ActionCreator.setUser(response.data));
        dispatch(ActionCreator.requireAuthorization(false));
      })
      .catch((err) => {
        throw new Error(err.response.data.error);
      });
  },

  setUser: (payload = {}) => {
    return {
      type: ActionType.SET_USER,
      payload,
    };
  },

  setError: (payload = null) => {
    return {
      type: ActionType.SET_ERROR,
      payload,
    };
  },

  setBookmark: (data) => (dispatch, _getState, api) => {
    return api.post(`/favorite/${data.id}/${data.status}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        if (err.message === `unauthorized`) {
          history.push(`/login`);
          location.reload();
        }
      });
  },

  getFavoriteOffers: () => (dispatch, _getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.setFavoriteOffers(response.data));
        return response.data;
      });
  },

  setFavoriteOffers: (payload = []) => {
    return {
      type: ActionType.SET_FAVORITE_OFFERS,
      payload,
    };
  },

  deleteOffer: (payload) => {
    return {
      type: ActionType.REMOVE_FAVORITE_OFFER,
      payload,
    };
  },

  sendReview: (data) => (dispatch, _getState, api) => {
    return api.post(`/comments/${data.id}`, {rating: data.rating, comment: data.reviewText})
      .then((response) => {
        dispatch(ActionCreator.getReviews(data.id));
        return response.data;
      })
      .catch((err) => {
        if (err.message === `unauthorized`) {
          history.push(`/login`);
          location.reload();
        }
        throw new Error(err.response.data.error);
      });
  }
};

export default ActionCreator;
