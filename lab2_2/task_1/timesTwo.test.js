const timesTwo = require('./timesTwo.js');

test('повертає число, помножене на 2', () => {
    expect(timesTwo(2)).toBe(4);
})