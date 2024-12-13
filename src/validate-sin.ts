/**
 * This applies the Luhn algorithm which is similar to what's in https://en.wikipedia.org/wiki/Luhn_algorithm except it only applies to 9 digits
 * @param input : string - The SIN to validate
 * @returns boolean - True if it's a valid SIN, false if not
 */
export const Validate = (input : string) : boolean =>{
        if (Check9Digits(input)){
        const digits : number[] = ProcessDigits(input);

        return ChecksumMod10(digits);
    }

    return false;
}
/**
 * Checks if it's 9 digits long and numeric
 * @param input : string - The SIN to validate
 * @returns boolean - True if it's 9 digits
 */
export const Check9Digits = (input: string) : boolean => {
    const regex = new RegExp(/^\d{9}$/);
    return regex.test(input);
}
/**
 * Iterate through each digit of a numeric string. At every even index push the digit to the array unchanged. At every odd index, double the digit, if it's greater
 * 10 or greater, split the digits and push both of them to the array.
 * @param input : string - A string containing only digits
 * @returns number[] - An array of digits that's been processed
 */
export const ProcessDigits = (input: string) : number[] => {
    let digits : number[] = []; //array to store digits

    //so 1111 should become [1,2,1,2] and 5555 should become [5,1,0,5,1,0]
    [...input].forEach((d, index)=>{ //iterate through SIN checking each digit
        const digit = parseInt(d);
        if (index % 2 === 0){ //even index, so just push to digits
            digits.push(digit);
        }else{ //odd index, so double and and possibly split digits
            const adjusted = digit * 2;
            const str = adjusted.toString(); //will produce 2 digits if 10 or greater
            digits = digits.concat([...str].map(m=>parseInt(m))); //add characters as numbers to digits
        }
    });
    return digits;
}
/**
 * Makes a sum of all digits and then checks if divisible by 10
 * @param digits : number[] - An array of digits
 * @returns boolean - If checksum is divisble by 10
 */
export const ChecksumMod10 = (digits : number[]) : boolean => {
    const digit_sum = digits.reduce((sum, current_num)=>sum+current_num); //get sum of digits
    console.log(digit_sum, digits);
    if (digit_sum % 10 === 0){ //divisible by 10, therefore a valid SIN
        return true;
    }
    return false;
}


