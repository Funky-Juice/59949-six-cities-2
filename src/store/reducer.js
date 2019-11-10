import * as types from './action-types';


const initialState = {
  city: null,
  offers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CITY: return Object.assign({}, state, {
      city: action.payload
    });

    case types.SET_OFFERS: return Object.assign({}, state, {
      offers: action.payload
    });
  }

  return state;
};

export default reducer;
