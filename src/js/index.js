import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from '__store/configureStore';
import hocMaterialTheme from '__components/hoc/HocMaterialTheme';
import App from '__containers/App';
import Todos from '__containers/Todos';
import Books from '__containers/Books';
import Login from '__containers/Login';
import auth from './auth';

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
  <Provider store={store}>
    <Router history={history} render={applyRouterMiddleware(customUseScroll)}>
      <Route path="/" component={hocMaterialTheme(App)} onEnter={auth.requireToken}>
        <IndexRoute component={Todos} />
        <Route path="books" component={Books} />
      </Route>
      <Route path="login" component={hocMaterialTheme(Login)} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
