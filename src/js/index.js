import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from 'store/configureStore';
import App from 'containers/App';
import Todos from 'containers/Todos';
import Books from 'containers/Books';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
const customUseScroll = useScroll((prevRouterProps, { routes }) => {
  if (routes.some(route => route.ignoreScrollBehavior)) {
    return false;
  }

  if (routes.some(route => route.scrollToTop)) {
    return [0, 0];
  }

  return true;
});

injectTapEventPlugin();

render(
  <Provider store = { store }>
    <Router history = { history } render = { applyRouterMiddleware(customUseScroll) }>
      <Route path = "/" component = { App }>
        <IndexRoute component = { Todos } />
        <Route path = "/books" component = { Books } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
