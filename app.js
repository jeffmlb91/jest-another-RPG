const Potion = require('./lib/Potion');

test('creates a health object', () => {
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(number));
});