import assert from 'power-assert';
import * as todoActions from '../../src/js/actions/todos';

describe('todo actions', () => {
  it('#addTodo()', () => {
    const text = 'test';
    const date = '2016/01/01';

    const expected = {
      type: todoActions.ADD_TODO,
      id: 0,
      text,
      date
    };

    assert.deepStrictEqual(todoActions.addTodo(text, date), expected);
  });
});
