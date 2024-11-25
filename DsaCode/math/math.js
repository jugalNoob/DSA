
// which number divide by 3
// let num=[10 , 20 , 30 , 40 , 6]

// let de=[]

// for(let i=0; i<num.length; i++){


// if(num[i]%3){


//         de.push(num[i])
//     }
// }

// console.log(de)


/////////////////////  Check which number divide by three  .,.....................

// let num = [10, 20, 30, 40, 6 , 0.5];

// let de = [];
// let two = [];
// let three = [];

// for (let i = 0; i < num.length; i++) {
//   // Check if the number is divisible by 3
//   if (num[i] % 3 === 0) {
//     de.push(num[i]);
//   } 
//   // Check if the number is divisible by 2 but not by 3
//   else if (num[i] % 2 === 0) {
//     two.push(num[i]);
//   } 
//   // Otherwise, it's neither divisible by 2 nor 3
//   else {
//     three.push(num[i]);
//   }
// }

// console.log(de, "check with number divisible by 3");
// console.log(two, "check with number divisible by 2");
// console.log(three, "check with number not divisible by 2 or 3");


/// math  algo start row class ....................




function isDivisibleBy3(number) {
    // Convert the number to a string to handle large numbers
    const digits = number.toString();
    let sumOfDigits = 0;

    // Loop through each digit and add it to the sum
    for (let i = 0; i < digits.length; i++) {
        sumOfDigits += parseInt(digits[i]);
    }

    // Check if the sum of digits is divisible by 3
    return sumOfDigits % 3 === 0;
}

console.log(isDivisibleBy3(123456)); // true
console.log(isDivisibleBy3(9876543210)); // true
console.log(isDivisibleBy3(12345)); // false


function isJumbled(number) {
    const original = number.toString();  // Convert the number to a string
    const sorted = original.split('').sort().join('');  // Sort the digits in ascending order
    
    // console.log(original , sorted)

    // Compare the original and sorted versions
    return original !== sorted;
}

console.log(isJumbled(123456));  // false (not jumbled, digits are in order)
console.log(isJumbled(54321));  // true (jumbled, digits are rearranged)
console.log(isJumbled(11233)); // true (jumbled, digits are rearranged)



/// 

function binaryToHex(binary) {
    // Parse the binary string into a decimal number
    const decimal = parseInt(binary, 2);
    
    // Convert the decimal number to a hexadecimal string
    const hex = decimal.toString(16).toUpperCase();
    
    return hex;
}

///Convert a binary number to hexadecimal number

console.log(binaryToHex('110101'));  // '35'
console.log(binaryToHex('101101101')); // '16D'
console.log(binaryToHex('100110111')); // '4B7'


///Program for decimal to hexadecimal conversion 

function decimalToHex(decimal) {
    // Convert the decimal number to a hexadecimal string
    const hex = decimal.toString(16).toUpperCase();
    
    return hex;
}

console.log(decimalToHex(255));  // 'FF'
console.log(decimalToHex(1234)); // '4D2'
console.log(decimalToHex(1024)); // '400'


//Converting a Real Number (between 0 and 1) to Binary String

function decimalToBinary(decimal, precision = 16) {
    if (decimal <= 0 || decimal >= 1) {
        return 'Input must be between 0 and 1.';
    }

    let binary = '.';
    let count = 0;

    while (decimal > 0 && count < precision) {
        decimal *= 2;
        if (decimal >= 1) {
            binary += '1';
            decimal -= 1;
        } else {
            binary += '0';
        }
        count++;
    }

    return binary;
}

console.log(decimalToBinary(0.625));   // '.101'
console.log(decimalToBinary(0.1));     // '.00011001100110011...'
console.log(decimalToBinary(0.25));    // '.01'
