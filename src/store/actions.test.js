import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import * as types from './action-types';
import ActionCreator from './actions';

describe(`Action creators work correctly`, () => {

  it(`Action creator for setting active city returns correct action`, () => {
    const city = {};

    expect(ActionCreator.setActiveCity(city)).toEqual({
      type: types.SET_ACTIVE_CITY,
      payload: city
    });

    expect(ActionCreator.setActiveCity()).toEqual({
      type: types.SET_ACTIVE_CITY,
      payload: {}
    });
  });

  it(`Action creator for setting active offers returns correct action`, () => {
    const offers = [];

    expect(ActionCreator.setActiveOffers(offers)).toEqual({
      type: types.SET_ACTIVE_OFFERS,
      payload: offers
    });

    expect(ActionCreator.setActiveOffers()).toEqual({
      type: types.SET_ACTIVE_OFFERS,
      payload: []
    });
  });

  it(`Action creator for setting active offer ID returns correct action`, () => {
    const id = 1;

    expect(ActionCreator.setActiveOfferId(id)).toEqual({
      type: types.SET_ACTIVE_OFFER_ID,
      payload: id
    });

    expect(ActionCreator.setActiveOfferId()).toEqual({
      type: types.SET_ACTIVE_OFFER_ID,
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
          type: types.SET_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Action creator for setting of require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(true)).toEqual({
      type: types.REQUIRED_AUTHORIZATION,
      payload: true
    });

    expect(ActionCreator.requireAuthorization(false)).toEqual({
      type: types.REQUIRED_AUTHORIZATION,
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
          type: types.SET_USER,
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
          type: types.SET_USER,
          payload: {fake: true},
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: types.REQUIRED_AUTHORIZATION,
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
});
