import { createAction } from 'redux-actions';


export const LOGIN = 'LOGIN';

const fetchLogin = createAction(LOGIN, () => ({
  isLoggedIn: true,
}));
