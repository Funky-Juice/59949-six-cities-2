import * as types from './action-types';
import reducer from './reducer';
import testOffer from '../mocks/test-offer';

describe(`Reducer works correctly`, () => {

  it(`Reducer without additional params should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null
    });
  });

  it(`Reducer should return active city object`, () => {
    expect(reducer({
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null
    }, {
      type: types.SET_ACTIVE_CITY,
      payload: {}
    })).toEqual({
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null
    });

    expect(reducer({
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null
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
      offers: [],
      activeCity: {
        name: `Amsterdam`,
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10
        }
      },
      activeOffers: [],
      activeOfferId: null
    });
  });

  it(`Reducer should return array of active offers`, () => {
    expect(reducer({
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null
    }, {
      type: types.SET_ACTIVE_OFFERS,
      payload: []
    })).toEqual({
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null
    });

    expect(reducer({
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null
    }, {
      type: types.SET_ACTIVE_OFFERS,
      payload: [testOffer]
    })).toEqual({
      offers: [],
      activeCity: {},
      activeOffers: [testOffer],
      activeOfferId: null
    });
  });

  it(`Reducer should return active offer ID`, () => {
    expect(reducer({
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null
    }, {
      type: types.SET_ACTIVE_OFFER_ID,
      payload: null
    })).toEqual({
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null
    });

    expect(reducer({
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null
    }, {
      type: types.SET_ACTIVE_OFFER_ID,
      payload: 1
    })).toEqual({
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: 1
    });
  });
});
