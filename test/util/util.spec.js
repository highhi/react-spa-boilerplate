import assert from 'power-assert';
import { keysToCamelCase, getImagePath } from '__util';

describe('#keysToCamelCase()', () => {
  const mock = {
    some_one: 1,
    some_two: 2,
    some_three: 3
  };

  it('全てのキーがキャメルケースに変換される', () => {
    const expected = {
      someOne: 1,
      someTwo: 2,
      someThree: 3
    };

    assert.deepStrictEqual(keysToCamelCase(mock), expected);
  });

  it('some_oneとsome_twoがキャメルケースに変換される', () => {
    const expected = {
      someOne: 1,
      someTwo: 2
    };

    assert.deepStrictEqual(keysToCamelCase(mock, ['some_one', 'some_two']), expected);
  });

  it('some_twoとsome_threeがキャメルケースに変換される', () => {
    const expected = {
      someTwo: 2,
      someThree: 3
    };

    assert.deepStrictEqual(keysToCamelCase(mock, {
      foo: 'some_two',
      bar: 'some_three'
    }), expected);
  });
});

describe('#getImagePath()', () => {
  it('正しいパスが返される', () => {
    const path = getImagePath('book.jpg');

    assert(path === '/_karma_webpack_/img/book.jpg');
  });
});
