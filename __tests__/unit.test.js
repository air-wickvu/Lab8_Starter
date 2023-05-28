// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber returns true for valid phone numbers', () => {
    expect(functions.isPhoneNumber('(999)-999-9999')).toBe(true);
    expect(functions.isPhoneNumber('999-999-9999')).toBe(true);
    expect(functions.isPhoneNumber('999999')).toBe(false);
    expect(functions.isPhoneNumber('9999999999999')).toBe(false);
});

test('isEmail returns true for valid emails', () => {
    expect(functions.isEmail('bob@gmail.com')).toBe(true);
    expect(functions.isEmail('bob@yahoo.com')).toBe(true);
    expect(functions.isEmail('bob@gmail')).toBe(false);
    expect(functions.isEmail('bob@gmail.')).toBe(false);
});

test('isStrongPassword returns true for valid passwords', () => {
    expect(functions.isStrongPassword('z123')).toBe(true);
    expect(functions.isStrongPassword('z12345678901234')).toBe(true);
    expect(functions.isStrongPassword('z123456789012345')).toBe(false);
    expect(functions.isStrongPassword('123456789012345')).toBe(false);
});

test('isDate returns true for valid dates', () => {
    expect(functions.isDate('01/01/0001')).toBe(true);
    expect(functions.isDate('1/1/0001')).toBe(true);
    expect(functions.isDate('//')).toBe(false);
    expect(functions.isDate('1/1/1')).toBe(false);
});

test('isHexColor returns true for valid hex colors', () => {
    expect(functions.isHexColor('#000')).toBe(true);
    expect(functions.isHexColor('#000000')).toBe(true);
    expect(functions.isHexColor('#00000000000000000')).toBe(false);
    expect(functions.isHexColor('#0')).toBe(false);
});