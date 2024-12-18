# Validate SIN

The rules for SIN validation are given below.

- Consists of exactly 9 digits
- Starting with the second digit, double every alternate digit in the SIN.
- If doubling a digit results in a 10 or higher, then add together its individual digits (eg: 16 becomes 1+6).
- The final calculated number is the sum of all the digits.
- If the sum of all digits is divisble by 10, it is valid

Numbers that are valid are: \
046454286 \
252929252

This project was built using Vite

## Running this project locally

In a terminal in the project's working directory, type: ```npm run dev``` for a dev build, or ```npm run build``` and then ```npm run preview```
Both of these will mention a url like http://localhost:4173

## Validating the SIN

Type the SIN in the input field, clicking the "Validate" button or pressing enter will in the field, should trigger the validation check.

**Validate** has 3 parts: **Check9Digits**, **ProcessDigits** and **ChecksumMod10** and because it had at least 3 major steps, was divided into 3 functions so each part could be tested on their own.

**Check9Digits** excepts the SIN as a string, because a value like "046454286" needs to pass, and wouldn't if it was an integer with the leading zero being ignored. A Regex is used to check if the string is in the format of 9 digits.

**ProcessDigits** returns an array of digits. The SIN string is checked as an array of characters, each individual digit character is parsed as an integer, with the rules for odd/even indexes applied. If it is doubled and above 9, it's converted to a string that's transformed into an array of 2 characters that's mapped into an array of integers. Whatever the outcome of each digit check is, the digits are pushed or concatenated on to the digits array.

**ChecksumMod10** adds an array of digits together, and checks if the sum is divisble by 10.

All 3 of those functions combined return the result of **Validate**

The validation only returns true or false, and doesn't provide details of why the validation failed or passed.

## Additional Notes

This project has been implemented as a GitHub page on: https://jykng-van.github.io/validate-sin/