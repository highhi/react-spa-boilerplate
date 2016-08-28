let todoId = 0;
export const ADD_TODO = 'ADD_TODO';

export function addTodo(text, date) {
  return {
    type: ADD_TODO,
    id: todoId++,
    text,
    date,
  };
}
