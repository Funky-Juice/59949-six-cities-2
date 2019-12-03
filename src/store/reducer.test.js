import * as types from './action-types';
import reducer from './reducer';
import testOffer from '../mocks/test-offer';

describe(`Reducer works correctly`, () => {

  it(`Reducer without additional params should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      user: {},
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null,
      isAuthorizationRequired: false
    });
  });

  it(`Reducer should correctly set user data`, () => {
    expect(reducer({
      user: {},
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null,
      isAuthorizationRequired: false
    }, {
      type: types.SET_USER,
      payload: {id: 1, email: `test@mail.ru`}
    })).toEqual({
      user: {id: 1, email: `test@mail.ru`},
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null,
      isAuthorizationRequired: false
    });
  });

  it(`Reducer should correctly set offers data`, () => {
    expect(reducer({
      user: {},
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null,
      isAuthorizationRequired: false
    }, {
      type: types.SET_OFFERS,
      payload: [{}, {}, {}]
    })).toEqual({
      user: {},
      offers: [{}, {}, {}],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null,
      isAuthorizationRequired: false
    });
  });

  it(`Reducer should return active city object`, () => {
    expect(reducer({
      user: {},
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null,
      isAuthorizationRequired: false
    }, {
      type: types.SET_ACTIVE_CITY,
      payload: {}
    })).toEqual({
      user: {},
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null,
      isAuthorizationRequired: false
    });

    expect(reducer({
      user: {},
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null,
      isAuthorizationRequired: false
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
      user: {},
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
      activeOfferId: null,
      isAuthorizationRequired: false
    });
  });

  it(`Reducer should return array of active offers`, () => {
    expect(reducer({
      user: {},
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null,
      isAuthorizationRequired: false
    }, {
      type: types.SET_ACTIVE_OFFERS,
      payload: []
    })).toEqual({
      user: {},
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null,
      isAuthorizationRequired: false
    });

    expect(reducer({
      user: {},
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null,
      isAuthorizationRequired: false
    }, {
      type: types.SET_ACTIVE_OFFERS,
      payload: [testOffer]
    })).toEqual({
      user: {},
      offers: [],
      activeCity: {},
      activeOffers: [testOffer],
      activeOfferId: null,
      isAuthorizationRequired: false
    });
  });

  it(`Reducer should return active offer ID`, () => {
    expect(reducer({
      user: {},
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null,
      isAuthorizationRequired: false
    }, {
      type: types.SET_ACTIVE_OFFER_ID,
      payload: null
    })).toEqual({
      user: {},
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null,
      isAuthorizationRequired: false
    });

    expect(reducer({
      user: {},
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null,
      isAuthorizationRequired: false
    }, {
      type: types.SET_ACTIVE_OFFER_ID,
      payload: 1
    })).toEqual({
      user: {},
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: 1,
      isAuthorizationRequired: false
    });
  });

  it(`Reducer should set need of authorization`, () => {
    expect(reducer({
      user: {},
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null,
      isAuthorizationRequired: true
    }, {
      type: types.REQUIRED_AUTHORIZATION,
      payload: false
    })).toEqual({
      user: {},
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null,
      isAuthorizationRequired: false
    });

    expect(reducer({
      user: {},
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null,
      isAuthorizationRequired: false
    }, {
      type: types.REQUIRED_AUTHORIZATION,
      payload: true
    })).toEqual({
      user: {},
      offers: [],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null,
      isAuthorizationRequired: true
    });
  });

  it(`Reducer should set offer field is_favorite in offers array`, () => {
    const modifedOffer = Object.assign({}, testOffer);
    // eslint-disable-next-line camelcase
    modifedOffer.is_favorite = !testOffer.is_favorite;

    expect(reducer({
      user: {},
      offers: [testOffer],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null,
      isAuthorizationRequired: false
    }, {
      type: types.SET_OFFER_BOOKMARK,
      payload: modifedOffer
    })).toEqual({
      user: {},
      offers: [modifedOffer],
      activeCity: {},
      activeOffers: [],
      activeOfferId: null,
      isAuthorizationRequired: false
    });
  });
});
