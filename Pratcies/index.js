// let users = [
//         {
//             name: "Jugal Sharma",
//             total: 45,
//             accountNumber: "1234567890",
//             email: "jugal@example.com",
//             phone: "9876543210", 
//             address: "123 Main St, City, Country",
//             accountType: "Savings",
//             createdAt: new Date().toISOString()
//         },
//         {
//             name: "Kanika Sharma",
//             total: 69,
//             accountNumber: "0987654321",
//             email: "kanika@example.com",
//             phone: "8765432109",
//             address: "456 Elm St, City, Country",
//             accountType: "Checking",
//             createdAt: new Date().toISOString()
//         }
//     ];


//     let search = "Jugal Sharma";
//     let userFound = false;
    
//     for (let user of users) { 
//         if (user.name === search) {
//             console.log("User found:", user.name);
//             console.log("User info:", user);
//             userFound = true;
//             break;
//         }
//     }
    
//     if (!userFound) {
//         console.log("User not found.");
//     }


// let total=0

// total ++



    
const objArray = [
    {
        index: 0,
        details: {
            name: "Jugal Sharma",
                      total: 45,
                      accountNumber: "1234567890",
                      email: "jugal@example.com",
                      phone: "9876543210",
                      address: "123 Main St, City, Country",
                      accountType: "Savings",
                      createdAt: new Date().toISOString(),
            // identity: { hashPanCard: false, hashAdhaarCard: true },
        }
    },
    {
        index: 1,
        details: {
                      name: "Kanika Sharma",
            total: 44,
            accountNumber: "0987654321",
            email: "kanika@example.com",
            phone: "8765432109",
            address: "456 Elm St, City, Country",
            accountType: "Checking",
            createdAt: new Date().toISOString(),

// identity: { hashPanCard: false, hashAdhaarCard: true },
        }
    }
];



// let totalmoney = 10; // Initialize sum variable

// for (let key of objArray) { 
//     if (key.index === 0) {  // Check if index is 0

//         if (key.details.total <= 45) {
//             key.details.total += totalmoney;  // ✅ Corrected += instead of =+
//         } else {
//             console.log("Check Your Total Money");
//         }
        
//         console.log("Total for index 0:", key.details.total);
//     }
// }


// console.log("Total Sum:", totalSum); // Print the final sum of all `total` values




// search with name user

// let sear = "Jugal Sharma";
// let userFounds = false;


// for (let user of objArray) { 
//     if (user.details.name.toLowerCase() === sear.trim().toLowerCase()) { // Trim and compare case-insensitively
//         console.log("User found:", user.details.name);
//         console.log("User info:", user);
//         userFounds = true;
//         break;
//     }
// }


// if (!userFounds) {
//     console.log("User not found.");
// }


    /// Total All amount with all user 


// let totalSum = 0; // Initialize sum variable

// for (let key of  users) { 
//     let sum = key.total; // Extract `total` value
//     totalSum += sum; // Add to total sum
//   //  console.log(sum); // Print individual total values
// }

// console.log("Total Sum:", totalSum); // Print the final sum of all `total` values


// let data = [10, 20, 30, 40, 50];

// let centerIndex = Math.floor(data.length / 2); // Get middle index
// data.splice(centerIndex, 1); // Remove 1 element at center index

// console.log(data); // Output: [10, 20, 40, 50]

// let data = ["apple", "banana", "cherry"];

// for (let i = 0; i < data.length; i++) {
//     // console.log(data[i]); // Prints each element

//     console.log(i)
// }



// let data = [10, 20, 30, 40, 50];
// let centerIndex = Math.floor(data.length / 2);

// console.log(centerIndex)

// // Shift elements to the left to overwrite the middle element
// for (let i = centerIndex; i < data.length - 1; i++) {
//     data[i] = data[i + 1];
// }

// // Remove the last element since it's now duplicated
// data.length--;

// console.log(data); // Output: [10, 20, 40, 50]




// Would you like more details on bitwise operations or memory efficiency in JavaScript? 🚀


// let num = 5; // 5 in binary is 101
// console.log(num.toString(2)); // "101" (binary representation)
// console.log(num & 1); // Bitwise AND operation
// console.log(num << 1); // Left shift (multiply by 2)



// function getByteSize(str) {
//     return new TextEncoder().encode(str).length;
//   }
//   console.log(getByteSize("Hello")); // 5 bytes
//   console.log(getByteSize("😊")); // 4 bytes (emoji takes more space)
  


// get bytes size 

// let data = ["jugal", "karan", "anku", "kanika"];

// console.log(data.toString()); // Converts array to a string
// console.log(new TextEncoder().encode(data.toString()).length); // Gets byte size
// console.log(data.length)



// //  Mern algo Rate Limiting  -- Simple 

{/* <button onclick="Clicknum()">clickButton</button> */}
// let one = 0;
// let canClick = true;

// function Clicknum() {
//     if (!canClick) return; // Prevents further clicks when disabled

//     one += 1;

//     if (one < 6) {
//         console.log(one);
//     } else {
//         console.log("stop");
//         canClick = false; // Disable clicks until reset

//         setTimeout(() => {
//             one = 0;
//             canClick = true; // Re-enable clicks
//             console.log("Counter reset to 0");
//         }, 2000);
//     }
// }







// Simulating multiple clicks
// Clicknum(); // stop (one = 1)
// Clicknum(); // stop (one = 2)
// Clicknum(); // stop (one = 3)
// Clicknum(); // stop (one = 4)
// Clicknum(); // stop (one = 5)
// Clicknum(); // 6 (one > 5, so logs the number)
// Clicknum(); // 7
// Clicknum(); // 8

// let data = [
//     {
//         name: "jugal sharma",
//         total: 45
//     },
//     {
//         name: "kanika sharma",
//         total: 69
//     }
// ];

// let jsondata = JSON.stringify(data); // Correct way to convert data to JSON string

// console.log(jsondata); // Logs the JSON string instead of the object

// localStorage.setItem("userData", jsondata); // Stores JSON string in localStorage





// let data = [
//     {
//         name: "jugal sharma",
//         total: 45
//     },
//     {
//         name: "kanika sharma",
//         total: 69
//     }
// ];

// let totalSum = 0; // Initialize sum variable

// for (let key of data) { 
//     let sum = key.total; // Extract `total` value
//     totalSum += sum; // Add to total sum
//     console.log(sum); // Print individual total values
// }

// console.log("Total Sum:", totalSum); // Print the final sum of all `total` values


// 7309  11/31

//3721  11/26






// let one = ["jugal", "sharma"];
// let newOne = new Array(one.length + 1); // Create a new array with extra space

// for (let i = 0; i < one.length; i++) {
//     newOne[i] = one[i]; // Copy existing elements
// }

// newOne[one.length] = "kip"; // Add new element manually
// one = newOne;

// console.log(one);





// function countsetbits(n){


//     let count=0
 
//     while(n){
//         count+=n&1;
//         n>>=1
//     }
//     return count;
// }

// console.log(countsetbits(13))
// console.log(countsetbits(14))



// function countsetbits(n) {
//     return n.toString(2).split('').filter(bit => bit === '1').length;
// }

// console.log(countsetbits(13)); // Output: 3
// console.log(countsetbits(14)); // Output: 3



// function countsetbits(n) {
//     let count = 0;
//     while (n) {
//         count += n & 1;
//         n >>= 1;
//     }
//     return count;
// }

// console.log(countsetbits(0b0101)); // Binary 0101



// const arr = [10, 20, 30, 40, 50, 60, ];

// console.log(arr.length % 2 !== 0)
// // Step 3: Print half of each element and the center element using a loop
// for(let i=0; i<arr.length; i++){
//     // console.log("Half of Element at index", i, ":", arr[i] / 2);
    
//     // Calculate and print the center element (floor division)
//     if(arr.length % 2 !== 0) {  // Odd length
//         const centerIndex = Math.floor(arr.length / 2);
//         console.log("Center Element:", arr[centerIndex]);  // Display the center element
//     }
// }


// Step 2: Calculate the center index
// const centerIndex = Math.floor(arr.length / 2);


// Step 2: Calculate the center index
// const centerIndex = Math.floor(arr.length / 2);
// // Step 3: Access the center element
// const centerElement = arr[centerIndex];
// console.log("Array:", arr);
// console.log("Center Element:", centerElement);





// console.log("start")
// setTimeout(()=>{
//     console.log("done")
// },1000)
// console.log("end ")










// let data = ['ass', 'sexy', 'gay', 'hot', 'man', 'jugal', 'karan'];
// let allowedWords = ['karan', 'man', 'jugal']; // List of "simple" words allowed for searching

// let post = undefined;
// let search = 'man'; // Change this value to test different searches
// let found = false;

// // Check if the search word is in the allowed list
// if (allowedWords.includes(search)) {
//     for (let i = 0; i < data.length; i++) {
//         if (data[i] === search) { 
//             post = data[i];
//             found = true;
//             break; // Stop the loop if the word is found
//         }
//     }
// } else {
//     console.log("error: searching for bad words is not allowed");
// }

// // Display results only if the word is allowed and found
// if (found) {
//     console.log(post, "search result found");
// } else if (!found && allowedWords.includes(search)) {
//     console.log("error: word not found in the data");
// }



// which number divide by 3
// let num=[10 , 20 , 30 , 40 , 6]

// let de=[]

// for(let i=0; i<num.length; i++){


// if(num[i]%3){


//         de.push(num[i])
//     }
// }

// console.log(de)



/// math  algo start row class ....................




// function isDivisibleBy3(number) {
//     // Convert the number to a string to handle large numbers
//     const digits = number.toString();
//     let sumOfDigits = 0;

//     // Loop through each digit and add it to the sum
//     for (let i = 0; i < digits.length; i++) {
//         sumOfDigits += parseInt(digits[i]);
//     }

//     // Check if the sum of digits is divisible by 3
//     return sumOfDigits % 3 === 0;
// }

// console.log(isDivisibleBy3(123456)); // true
// console.log(isDivisibleBy3(9876543210)); // true
// console.log(isDivisibleBy3(12345)); // false


// function isJumbled(number) {
//     const original = number.toString();  // Convert the number to a string
//     const sorted = original.split('').sort().join('');  // Sort the digits in ascending order
    
//     // console.log(original , sorted)

//     // Compare the original and sorted versions
//     return original !== sorted;
// }

// console.log(isJumbled(123456));  // false (not jumbled, digits are in order)
// console.log(isJumbled(54321));  // true (jumbled, digits are rearranged)
// console.log(isJumbled(11233)); // true (jumbled, digits are rearranged)



// /// 

// function binaryToHex(binary) {
//     // Parse the binary string into a decimal number
//     const decimal = parseInt(binary, 2);
    
//     // Convert the decimal number to a hexadecimal string
//     const hex = decimal.toString(16).toUpperCase();
    
//     return hex;
// }

// ///Convert a binary number to hexadecimal number

// console.log(binaryToHex('110101'));  // '35'
// console.log(binaryToHex('101101101')); // '16D'
// console.log(binaryToHex('100110111')); // '4B7'


// ///Program for decimal to hexadecimal conversion 

// function decimalToHex(decimal) {
//     // Convert the decimal number to a hexadecimal string
//     const hex = decimal.toString(16).toUpperCase();
    
//     return hex;
// }

// console.log(decimalToHex(255));  // 'FF'
// console.log(decimalToHex(1234)); // '4D2'
// console.log(decimalToHex(1024)); // '400'


// //Converting a Real Number (between 0 and 1) to Binary String

// function decimalToBinary(decimal, precision = 16) {
//     if (decimal <= 0 || decimal >= 1) {
//         return 'Input must be between 0 and 1.';
//     }

//     let binary = '.';
//     let count = 0;

//     while (decimal > 0 && count < precision) {
//         decimal *= 2;
//         if (decimal >= 1) {
//             binary += '1';
//             decimal -= 1;
//         } else {
//             binary += '0';
//         }
//         count++;
//     }

//     return binary;
// }

// console.log(decimalToBinary(0.625));   // '.101'
// console.log(decimalToBinary(0.1));     // '.00011001100110011...'
// console.log(decimalToBinary(0.25));    // '.01'
