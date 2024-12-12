/**
 * This applies the Luhn algorithm which is similar to what's in https://en.wikipedia.org/wiki/Luhn_algorithm except it only applies to 9 digits
 * @param input : string - The SIN to validate
 * @returns boolean - True if it's a valid SIN, false if not
 */
const Validate = (input : string) : boolean =>{
    //first check if the input is 9 characters long and a number
    const regex = new RegExp(/^\d{9}$/);
    if (regex.test(input)){
        let digits : number[] = []; //array to store digits

        [...input].forEach((d, index)=>{ //iterate through SIN checking each digit
            const digit = parseInt(d);
            if (index % 2 === 0){ //even index, so just push to digits
                digits.push(digit);
            }else{ //odd index, so double and and possibly split digits
                const adjusted = digit * 2;
                const str = adjusted.toString();
                digits = digits.concat([...str].map(m=>parseInt(m))); //add characters as numbers to digits
            }
        });

        const digit_sum = digits.reduce((sum, current_num)=>sum+current_num); //get sum of digits
        console.log(digit_sum, digits);
        if (digit_sum % 10 === 0){ //divisible by 10, therefore a valid SIN
            return true;
        }
    }

    return false;
}

export default Validate;