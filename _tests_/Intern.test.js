const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Mark');

    expect(intern.name).toBe('Mark');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern name', () => {
    const intern = new Intern('Mark');

    // expect(intern.getName()).toHaveProperty('')
});

test('get intern ID', () => {
    const intern = new Intern('Mark');

    // expect(intern.getId()).
});

test('get intern email', () => {
    const intern = new Intern('Mark');

});

test('gets intern role', () => {
    const intern = new Intern('Mark');
});