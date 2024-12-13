import Validate from './validate-sin';

//probably should have Validate divided up
describe('Validate', () => {
    test("Check SIN that isn't all digits", () => {
        expect(Validate('ab1234567')).toBe(false);
    });
    test("Check SIN that isn't 9 digits", () => {
        expect(Validate('12345678')).toBe(false);
    });
    test("Check SIN that is valid", () => {
        expect(Validate('046454286')).toBe(true);
    });
    test("Check SIN that is invalid", () => {
        expect(Validate('123456789')).toBe(false);
    });
})

