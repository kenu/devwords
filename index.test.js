const getString = require('./index');

describe('devwords', () => {
  test('should return a string', () => {
    expect(typeof getString()).toBe('string');
  });

  test('should return a non-empty string', () => {
    const result = getString();
    expect(result.length).toBeGreaterThan(0);
  });

  test('should return different strings on multiple calls (eventually)', () => {
    const results = new Set();
    for (let i = 0; i < 5; i++) {
      results.add(getString());
    }
    // Should get at least a few different strings in 5 tries
    expect(results.size).toBeGreaterThan(1);
  });
});
