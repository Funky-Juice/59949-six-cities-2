import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import ActionType from './action-types';
import ActionCreator from './actions';

describe(`Action creators work correctly`, () => {

  it(`Action creator for setting active city returns correct action`, () => {
    const city = {};

    expect(ActionCreator.setActiveCity(city)).toEqual({
      type: ActionType.SET_ACTIVE_CITY,
      payload: city
    });

    expect(ActionCreator.setActiveCity()).toEqual({
      type: ActionType.SET_ACTIVE_CITY,
      payload: {}
    });
  });

  it(`Action creator for setting active offers returns correct action`, () => {
    const offers = [];

    expect(ActionCreator.setActiveOffers(offers)).toEqual({
      type: ActionType.SET_ACTIVE_OFFERS,
      payload: offers
    });

    expect(ActionCreator.setActiveOffers()).toEqual({
      type: ActionType.SET_ACTIVE_OFFERS,
      payload: []
    });
  });

  it(`Action creator for setting active offer ID returns correct action`, () => {
    const id = 1;

    expect(ActionCreator.setActiveOfferId(id)).toEqual({
      type: ActionType.SET_ACTIVE_OFFER_ID,
      payload: id
    });

    expect(ActionCreator.setActiveOfferId()).toEqual({
      type: ActionType.SET_ACTIVE_OFFER_ID,
      payload: null
    });
  });

  it(`Action creator for fetch Offers data returns correct action`, () => {
    const dispatch = jest.fn();
    const api = createAPI();
    const apiMock = new MockAdapter(api);
    const dataLoader = ActionCreator.getOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Action creator for setting of require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(true)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: true
    });

    expect(ActionCreator.requireAuthorization(false)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: false
    });
  });

  it(`Action creator for fetch User data returns correct action`, () => {
    const dispatch = jest.fn();
    const api = createAPI();
    const apiMock = new MockAdapter(api);
    const dataLoader = ActionCreator.getUser();

    apiMock
      .onGet(`/login`)
      .reply(200, {fake: true});

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER,
          payload: {fake: true},
        });
      });
  });

  it(`Action creator for send User data returns correct actions`, () => {
    const dispatch = jest.fn();
    const api = createAPI();
    const apiMock = new MockAdapter(api);
    const dataLoader = ActionCreator.authUser();

    apiMock
      .onPost(`/login`)
      .reply(200, {fake: true});

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER,
          payload: {fake: true},
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: false,
        });
        expect(location.pathname).toEqual(`/`);
      });
  });

  it(`Action creator for setBookmark returns correct actions`, () => {
    const dispatch = jest.fn();
    const api = createAPI();
    const apiMock = new MockAdapter(api);
    const data = {id: 1, status: 1};
    const dataLoader = ActionCreator.setBookmark(data);

    apiMock
      .onPost(`/favorite/${data.id}/${data.status}`)
      .reply(200, {fake: true});

    return dataLoader(dispatch, jest.fn(), api)
      .then((response) => {
        expect(response).toEqual({fake: true});
      });
  });

  it(`Action creator for getFavoriteOffers returns correct actions`, () => {
    const dispatch = jest.fn();
    const api = createAPI();
    const apiMock = new MockAdapter(api);
    const dataLoader = ActionCreator.getFavoriteOffers();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return dataLoader(dispatch, jest.fn(), api)
      .then((response) => {
        expect(response).toEqual([{fake: true}]);

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_FAVORITE_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Action creator for offer delete returns correct action`, () => {
    const id = 1;

    expect(ActionCreator.deleteOffer(id)).toEqual({
      type: ActionType.REMOVE_FAVORITE_OFFER,
      payload: id
    });
  });

  it(`Action creator for clear offers returns correct action`, () => {
    expect(ActionCreator.clearOffers()).toEqual({
      type: ActionType.REMOVE_OFFERS,
      payload: null
    });
  });

  it(`Action creator for getReviews returns correct actions`, () => {
    const dispatch = jest.fn();
    const api = createAPI();
    const apiMock = new MockAdapter(api);
    const id = 1;
    const dataLoader = ActionCreator.getReviews(id);

    apiMock
      .onGet(`/comments/${id}`)
      .reply(200, [{fake: true}]);

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Action creator for sendReview returns correct actions`, () => {
    const dispatch = jest.fn();
    const api = createAPI();
    const apiMock = new MockAdapter(api);
    const data = {id: 1, rating: 3, comment: `review text`};
    const dataLoader = ActionCreator.sendReview(data);

    apiMock
      .onPost(`/comments/${data.id}`)
      .reply(200, [{fake: true}]);

    return dataLoader(dispatch, jest.fn(), api)
      .then((response) => {
        expect(response).toEqual([{fake: true}]);
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`Action creator for setting error message returns correct action`, () => {
    const errorText = `Error text message`;

    expect(ActionCreator.setError(errorText)).toEqual({
      type: ActionType.SET_ERROR,
      payload: errorText
    });

    expect(ActionCreator.setError()).toEqual({
      type: ActionType.SET_ERROR,
      payload: null
    });
  });

});
