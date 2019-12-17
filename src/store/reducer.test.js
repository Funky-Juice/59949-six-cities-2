import ActionType from './action-types';
import reducer from './reducer';
import testOffer from '../mocks/test-offer';

describe(`Reducer works correctly`, () => {

  it(`Reducer without additional params should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    });
  });

  it(`Reducer should correctly set user data`, () => {
    expect(reducer({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    }, {
      type: ActionType.SET_USER,
      payload: {id: 1, email: `test@mail.ru`}
    })).toEqual({
      user: {id: 1, email: `test@mail.ru`},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    });
  });

  it(`Reducer should correctly set offers data`, () => {
    expect(reducer({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    }, {
      type: ActionType.SET_OFFERS,
      payload: [{}, {}, {}]
    })).toEqual({
      user: {},
      offers: [{}, {}, {}],
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    });
  });

  it(`Reducer should return active city object`, () => {
    expect(reducer({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    }, {
      type: ActionType.SET_ACTIVE_CITY,
      payload: {}
    })).toEqual({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    });

    expect(reducer({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    }, {
      type: ActionType.SET_ACTIVE_CITY,
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
      offers: null,
      reviews: null,
      activeCity: {
        name: `Amsterdam`,
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10
        }
      },
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    });
  });

  it(`Reducer should return array of active offers`, () => {
    expect(reducer({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    }, {
      type: ActionType.SET_ACTIVE_OFFERS,
      payload: []
    })).toEqual({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    });

    expect(reducer({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    }, {
      type: ActionType.SET_ACTIVE_OFFERS,
      payload: [testOffer]
    })).toEqual({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [testOffer],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    });
  });

  it(`Reducer should return active offer ID`, () => {
    expect(reducer({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    }, {
      type: ActionType.SET_ACTIVE_OFFER_ID,
      payload: null
    })).toEqual({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    });

    expect(reducer({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    }, {
      type: ActionType.SET_ACTIVE_OFFER_ID,
      payload: 1
    })).toEqual({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: 1,
      favoriteOffers: null,
      isAuthorizationRequired: true
    });
  });

  it(`Reducer should set need of authorization`, () => {
    expect(reducer({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: false
    })).toEqual({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: false
    });

    expect(reducer({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: true
    })).toEqual({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    });
  });

  it(`Reducer should reset all offers to default`, () => {
    expect(reducer({
      user: {},
      offers: [testOffer],
      reviews: null,
      activeCity: {},
      activeOffers: [testOffer],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: [testOffer],
      isAuthorizationRequired: true
    }, {
      type: ActionType.REMOVE_ALL_OFFERS
    })).toEqual({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    });
  });

  it(`Reducer should set favorite offers array`, () => {
    expect(reducer({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    }, {
      type: ActionType.SET_FAVORITE_OFFERS,
      payload: [testOffer]
    })).toEqual({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: [testOffer],
      isAuthorizationRequired: true
    });
  });

  it(`Reducer should delete offer by ID from favorite offers array`, () => {
    expect(reducer({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: [{id: 1}, {id: 2}, {id: 3}],
      isAuthorizationRequired: true
    }, {
      type: ActionType.REMOVE_FAVORITE_OFFER,
      payload: testOffer.id
    })).toEqual({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: [{id: 1}, {id: 3}],
      isAuthorizationRequired: true
    });
  });

  it(`Reducer should correctly set reviews data`, () => {
    expect(reducer({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    }, {
      type: ActionType.SET_REVIEWS,
      payload: [{}, {}, {}]
    })).toEqual({
      user: {},
      offers: null,
      reviews: [{}, {}, {}],
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    });
  });

  it(`Reducer should correctly set error message`, () => {
    expect(reducer({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: null,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    }, {
      type: ActionType.SET_ERROR,
      payload: `Error message text`
    })).toEqual({
      user: {},
      offers: null,
      reviews: null,
      activeCity: {},
      activeOffers: [],
      errorMessage: `Error message text`,
      activeOfferId: null,
      favoriteOffers: null,
      isAuthorizationRequired: true
    });
  });
});
