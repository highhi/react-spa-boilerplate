import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './todos';
import auth from './auth';

const rootReducer = combineReducers({
  todos,
  auth,
  routing: routerReducer,
});

export default rootReducer;
