import { Validate, Check9Digits, ProcessDigits, ChecksumMod10 } from './validate-sin';

describe('Unit test Check9Digits',() =>{
    test("Check SIN that isn't all digits", () => {
        expect(Check9Digits('ab1234567')).toBe(false);
    });
    test("Check SIN that isn't 9 digits", () => {
        expect(Check9Digits('12345678')).toBe(false);
    });
});
describe('Unit test ProcessDigits',() =>{
    test("Test 1111", () => {
        const result1 : number[] = [1,2,1,2];
        expect(ProcessDigits('1111')).toEqual(result1);
    });
    test("Test 5555", () => {
        const result2 : number[] = [5, 1,0, 5, 1,0];
        expect(ProcessDigits('5555')).toEqual(result2);
    })
});
describe('Unit test ChecksumMod10', ()=>{
    test("Test [1,1]", () => {
        expect(ChecksumMod10([1,1])).toBe(false);
    });
    test("Test [5,5]", ()=>{
        expect(ChecksumMod10([5,5])).toBe(true);
    })
});
describe('Integration test Validate', () => {
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

