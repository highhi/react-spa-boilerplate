const apiMiddleware = () => next => action => {
  if (action.type === 'ADD_TODO') {
    return next(action);
  }

  return next(action);
};

export default apiMiddleware;
