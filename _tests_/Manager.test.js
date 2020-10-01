const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('Mark');

    expect(manager.name).toBe('Mark');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
});

test('gets manager name', () => {
    const manager = new Manager('Mark');

    // expect(manager.getName()).toHaveProperty('')
});

test('get manager ID', () => {
    const manager = new Manager('Mark');

    // expect(manager.getId()).
});

test('get manager email', () => {
    const manager = new Manager('Mark');

});

test('gets manager role', () => {
    const manager = new Manager('Mark');
});