import { handleActions } from 'redux-actions';

const todo = handleActions({
  ADD_TODO: (state, action) => ({
    text: action.payload.text,
    date: action.payload.date,
  }),
}, {});

const todos = handleActions({
  ADD_TODO: (state, action) => [...state, todo(undefined, action)],
}, []);

export default todos;
