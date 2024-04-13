const getString = require('./index');

test('should return a string', () => {
  expect(typeof getString()).toBe('string');
});
