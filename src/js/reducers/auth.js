import { handleActions } from 'redux-actions';

const initialState = {
  isLoggedIn: false,
};

const auth = handleActions({
  LOGIN: (state, action) => Object.assign({}, state, {
    isLoggedIn: action.payload.isLoggedIn,
  }),
}, initialState);

export default auth;
