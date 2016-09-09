function getToken() {
  return sessionStorage.getItem('app_toke');
}

function setToken() {
  return sessionStorage.setItem('app_toke', 'abc');
}

function loggedIn() {
  return getToken();
}

function requireToken(nextState, replace) {
  if (!loggedIn()) {
    replace({
      pathname: '/login',
      nextPath: nextState.location.pathname,
    });
  }
}

export default {
  getToken,
  setToken,
  loggedIn,
  requireToken,
};
