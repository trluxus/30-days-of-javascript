const addTwoPromises = require('./2723-add-two-promises');

test('returns 7', async () => {
    await expect(addTwoPromises(
        new Promise(resolve => setTimeout(() => resolve(2), 20)),
        new Promise(resolve => setTimeout(() => resolve(5), 60))
    )).resolves.toBe(7);
});

test('returns -2', () => {
    expect(addTwoPromises(
        new Promise(resolve => setTimeout(() => resolve(10), 50)),
        new Promise(resolve => setTimeout(() => resolve(-12), 30))
    )).resolves.toBe(-2);
});
