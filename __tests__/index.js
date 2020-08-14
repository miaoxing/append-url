import appendUrl from '../';

describe('append url', () => {
  test('without params', () => {
    expect(appendUrl('users')).toBe('users');
  });

  test('args', () => {
    expect(appendUrl('users/%s', 1)).toBe('users/1');
  });

  test('multi args', () => {
    expect(appendUrl('users/%s/articles/%s/comments/%s', [1, 2, 3])).toBe('users/1/articles/2/comments/3');
  });

  test('params', () => {
    expect(appendUrl('users', {type: 1})).toBe('users?type=1');
  });

  test('add params', () => {
    expect(appendUrl('users?foo=1', {bar: 1})).toBe('users?foo=1&bar=1');
  });


  test('args and params', () => {
    expect(appendUrl('users/%s', 1, {type: 1})).toBe('users/1?type=1');
  });
});
