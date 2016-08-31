import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '__reducers';

const middlewares = process.env.NODE_ENV === 'production' ?
  /* eslint-disable global-require */
  [thunk] : [thunk, require('redux-logger')()];
  /* eslint-enable global-require */

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
