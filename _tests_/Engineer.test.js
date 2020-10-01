const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Mark');

    expect(engineer.name).toBe('Mark');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer name', () => {
    const engineer = new Engineer('Mark');

    // expect(engineer.getName()).toHaveProperty('')
});

test('get engineer ID', () => {
    const engineer = new Engineer('Mark');

    // expect(engineer.getId()).
});

test('get engineer email', () => {
    const engineer = new Engineer('Mark');

});

test('gets engineer role', () => {
    const engineer = new Engineer('Mark');
});

test('gets engineer github', () => {
    const engineer = new Engineer('Mark');
})