import { createAction } from 'redux-actions';

export const ADD_TODO = 'ADD_TODO';

export const addTodo = createAction(ADD_TODO, (text, date) => ({
  text, date,
}));

export function fetchAddTodo(text, date) {
  return dispatch => dispatch(addTodo(text, date));
}
