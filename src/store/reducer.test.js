import * as types from './action-types';
import reducer from './reducer';
import testOffer from '../mocks/test-offer';

describe(`Reducer works correctly`, () => {

  it(`Reducer without additional params should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      activeCity: {},
      activeOffers: []
    });
  });

  it(`Reducer should return active city object`, () => {
    expect(reducer({
      activeCity: {},
      activeOffers: []
    }, {
      type: types.SET_ACTIVE_CITY,
      payload: {}
    })).toEqual({
      activeCity: {},
      activeOffers: []
    });

    expect(reducer({
      activeCity: {},
      activeOffers: []
    }, {
      type: types.SET_ACTIVE_CITY,
      payload: {
        name: `Amsterdam`,
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10
        }
      }
    })).toEqual({
      activeCity: {
        name: `Amsterdam`,
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10
        }
      },
      activeOffers: []
    });
  });

  it(`Reducer should return array of active offers`, () => {
    expect(reducer({
      activeCity: {},
      activeOffers: []
    }, {
      type: types.SET_ACTIVE_OFFERS,
      payload: []
    })).toEqual({
      activeCity: {},
      activeOffers: []
    });

    expect(reducer({
      activeCity: {},
      activeOffers: []
    }, {
      type: types.SET_ACTIVE_OFFERS,
      payload: [testOffer]
    })).toEqual({
      activeCity: {},
      activeOffers: [testOffer]
    });
  });
});
