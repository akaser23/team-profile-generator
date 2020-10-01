const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Mark', 10, 'me@gmail.com', 'Employee');

    expect(employee.name).toBe('Mark');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Mark');

    expect(employee.getName()).toHaveProperty('name');
});

test('gets employee ID', () => {
    const employee = new Employee('Mark');

    expect(employee.getId()).toHaveProperty('ID');
});

test('gets employee email', () => {
    const employee = new Employee('Mark');

    expect(employee.getEmail()).toHaveProperty('Email');
});

test('gets employee role', () => {
    const employee = new Employee('Mark');

    expect(employee.getRole()).toHaveProperty('Role');
});