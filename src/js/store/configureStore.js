import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '__reducers';
import apiMiddleware from '../middlewares/api';

const middlewares = [thunk, apiMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger());
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
