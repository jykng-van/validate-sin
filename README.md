# Validate SIN

The rules for SIN validation are given below.

- Consists of exactly 9 digits
- Starting with the second digit, double every alternate digit in the SIN.
- If doubling a digit results in a 10 or higher, then add together its individual digits (eg: 16 becomes 1+6).
- The final calculated number is the sum of all the digits.
- If the sum of all digits is divisble by 10, it is valid

Numbers that are valid are:
046454286
252929252

This project was built using Vite

## Running this project locally

In a terminal in the project's working directory, type: ```npm run dev``` for a dev build, or ```npm run build``` and then ```npm run preview```
Both of these will mention a url like http://localhost:4173

## Validating the SIN

Type the SIN in the input field, clicking the "Validate" button or pressing enter will in the field, should trigger the validation check.

