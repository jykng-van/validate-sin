import ValidateSin from './validate-sin';

//probably should have ValidateSin divided up
describe('ValidateSin', () => {
    test("Check SIN that isn't all digits", () => {
        expect(ValidateSin('ab1234567')).toBe(false);
    });
    test("Check SIN that isn't 9 digits", () => {
        expect(ValidateSin('12345678')).toBe(false);
    });
    test("Check SIN that is valid", () => {
        expect(ValidateSin('046454286')).toBe(true);
    });
    test("Check SIN that is invalid", () => {
        expect(ValidateSin('123456789')).toBe(false);
    });
})

