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
});
