import * as types from '../types';
// stado inicial
const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

// -> ação -> reducer -> novoState
// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      return newState;
    }
    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }
    default: {
      return state;
    }
  }
}
