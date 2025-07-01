let data = [45, 45, 63, 12];
let newValue = 22;

// Manual push
let index = 0;
while (data[index] !== undefined) {
  index++;
}
data[index] = newValue;

// Print without duplicates
for (let i = 0; i < data.length; i++) {
  let isDuplicate = false;

  // Check if data[i] already appeared earlier
  for (let j = 0; j < i; j++) {
    if (data[i] === data[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    console.log(data[i]);
  }
}



// let data = [45, 45, 63, 12];
// let newValue = 22;

// // Manually push new value without using push()
// let index = 0;
// while (data[index] !== undefined) {
//   index++;
// }
// data[index] = newValue;

// // Print only unique values using a loop
// for (let i = 0; i < data.length; i++) {
//   let isDuplicate = false;
  
//   // Check if data[i] appeared earlier
//   for (let j = 0; j < i; j++) {
//     if (data[i] === data[j]) {
//       isDuplicate = true;
//       break;
//     }
//   }

//   if (!isDuplicate) {
//     console.log(data[i]);
//   }
// }





// let data = [10, 50, 60, 50, 60, 40];

// for (let i = 0; i < data.length; i++) {
//     for (let j = i + 1; j < data.length; j++) {
//         if (data[i] === data[j]) {
//             console.log(`Duplicate pair: (${data[i]}, ${data[j]}) at indices (${i}, ${j})`);
//         }
//     }
// }

// let data = [10, 50, 60, 50, 60, 40];

// for (let i = 0; i < data.length; i++) {
//     for (let j = i + 1; j < data.length; j++) {
//         if (data[i] === data[j]) {
//             console.log(`Duplicate pair: (${data[i]}, ${data[j]}) at indices (${i}, ${j})`);
//         }
//     }
// }




// let rate = 5;
// let incrementing = false; // Track whether we are incrementing or decrementing

// const interval = setInterval(() => {
//     console.log(rate);

//     if (!incrementing) {
//         rate--;
//         if (rate === 0) {  // Change the condition to stop at 0
//             incrementing = true; // Switch to increment mode
//         }
//     } else {
//         rate++;
//         if (rate === 5) {  // Change the condition to stop at 5
//             incrementing = false; // Switch back to decrement mode
//         }
//     }

// }, 2000);



// let rate = 5;
// let step = -1; // -1 for decrementing, +1 for incrementing

// const interval = setInterval(() => {
//     console.log(rate);
//     rate += step; // Increment or decrement based on the step value

//     // Reverse the direction at boundaries
//     if (rate === 0 || rate === 5) {
//         step *= -1; // Flip the direction
//     }

// }, 2000);






//  center Point of elemnt array ------------->>>>>

// let data = [10, 20, 30, 440, 50];
// let centerIndex = Math.floor(data.length / 2);
// console.log(centerIndex); // 2
// console.log(data[centerIndex]); // 30




//  ///  ------ >>> Last element word of array  ------------->>

// let data = [10, 20, 30, 440, 50];
// let lastElement = data[data.length - 1];
// console.log("Last element:", lastElement); // 50


// let data = [10, 20, 30, 440, 50];
// let lastElement;

// for (let item of data) {
//     lastElement = item;
// }

// console.log("Last element:", lastElement); // 50


// /// ----- >>> first word of elmenet array -----------?>>

// let data = [10, 20, 30, 440, 50];
// let firstElement = data[0];
// console.log("First element:", firstElement); // 10


// let data = [10, 20, 30, 440, 50];
// let firstElement;

// for (let i = 0; i < data.length; i++) {
//     firstElement = data[i];
//     break; // Exit the loop after the first iteration
// }

// console.log("First element:", firstElement); // 10



// function dupl(data) {
//     let isDuplicate = false;
  
//     for (let i = 0; i < data.length; i++) {
//       for (let j = i + 1; j < data.length; j++) {
//         if (data[i] === data[j]) { 
//           isDuplicate = true;
//           console.log("Duplicate found:", data[i]);
//         }
//       }
//     }
  
//     if (!isDuplicate) {
//       console.log("No duplicates found");
//     }
//   }

//   console.log(dupl([10 , 20 , 30 ,30, 40 , 40]))


// function findMissing(data) {
//     let min = Math.min(...data);
//     let max = Math.max(...data);

//     const missing = [];
//     for (let i = min; i <= max; i++) {
//         if (!data.includes(i)) {
//             missing.push(i);
//         }
//     }

//     return missing;
// }

// // Example usage
// console.log(findMissing([0, 1, 3, 4, 5, 5, 5, 6 , 8])); // Output: [2]


// let str = "jugalj";
// let obj = {};  // Use object instead of array
// let maxChar = "";
// let maxCount = 0;

// for (let i = 0; i < str.length; i++) {
//     let char = str[i];
    
//     if (obj[char]) {
//         obj[char]++;
//     } else {
//         obj[char] = 1;
//     }

//     if (obj[char] > maxCount) {
//         maxCount = obj[char];
//         maxChar = char;
//     }
// }

// console.log("Frequencies:", obj);
// console.log("Most frequent character:", maxChar, "=>", maxCount, "times");


// let data = ["jugal", "karan", "anku", "kanika", 42543, 100, "hello", 200];

// console.log(typeof(data) === "number" ?  "add more element " : "new array alemnt")
// console.log(data.slice(0, 4))





// let data = ["jugal", "karan", "anku", "kanika", 42543, 100, "hello", 200];

// // Loop through the array from the start
// for (let i = 0; i < data.length; i++) {
//   if (typeof data[i] === "number") {
//     data.splice(i, 1);  // Remove the number at index i
//     i--;  // Adjust index after removal since elements shift left
//   }
// }

// console.log(data);  // ["jugal", "karan", "anku", "kanika", "hello"]


// let person = {
//     address: {
//       street: {
//         name: "MG Road"
//       }
//     }
//   };
  
//   let name = person?.address?.street?.name;  // Using optional chaining to safely access nested properties
//   let names = person?.name ?? 'unknown';     // Using nullish coalescing to provide a default value if `person.name` is null or undefined
//   console.log(name); // Output: MG Road
//   console.log(names); // Output: unknown (because person.name is undefined)
//   console.log(person); // Output: { address: { street: { name: "MG Road" } } }
  
//   console.log(globalThis===window)


// let str='hello'
// console.log(str.at(0))
// console.log(str.at(-1))


// let person = {
//     name: 'John',
//     address: null,
//   };
  
//   // Optional Chaining (?.) and Nullish Coalescing (??)
//   let street = person?.address?.street ?? 'No street available';
//   console.log(street); // Output: 'No street available'
  



// function outer() {
//     let count = 0;
//     return function inner() {
//       return ++count;
//     };
//   }
  
//   const counter1 = outer();
//   console.log(counter1()); // 1
//   console.log(counter1()); // 2
  
//   const counter2 = outer();
//   console.log(counter2()); // 1 (independent from counter1)
  
  


// let isLoggedIn = true;

// if (isLoggedIn) {
//   console.log("Welcome!");
// } else {
//   console.log("Please log in.");
// }



// Random ------ ::::::::::::::::::::::::::::

// let data = 456;

// let timeSeed = Date.now(); // Current timestamp in milliseconds
// console.log(timeSeed)
// let pseudoRandom = timeSeed % data;

// console.log(pseudoRandom);



// let data = 456;

// let t = performance.now();  // e.g., 123456.789 ms
// let pseudoRandom = Math.floor((t * 1000) % data);

// console.log(pseudoRandom);

// let data = ["jugal", "karan", "anku", "kanika"];

// let count = 0;
// let opt = undefined;

// let search = "ank";

// for (let i = 0; i < data.length; i++) {
//  console.log(data[i][0])
//  console.log(data[i][1])
//  console.log(data[i][2])

//     count++;
//     if (data[i].substring(0, 3) === search) { // check first 3 letters
//         opt = data[i];
//         break;
//     }
// }

// console.log(count); // how many loops it took
// console.log(opt);   // matched name




// check array digit with  code 



// let data = ["jugal", "karan", "anku", "kanika"];

// for (let i = 0; i < data.length; i++) {
//     let combined = data[i][0] + data[i][1] + data[i][2]; // simple joining

//     console.log(`Combined first 3 letters of "${data[i]}" = ${combined}`);
// }



// for (let i = 0; i < data.length; i++) {
//  console.log(data[i][0])
//  console.log(data[i][1])
//  console.log(data[i][2])


// -- near linear search 

// let data = ["jugal", "karan", "anku", "kanika" , "auka"];

// let count = 0;
// let opt = undefined;

// let search = "ankj";

// for (let i = 0; i < data.length; i++) {
//     count++;

//     // manual comparison of first 3 characters
//     if (
//         data[i][0] === search[0] &&
//         data[i][1] === search[1] &&
//         data[i][2] === search[2]
//     ) {
//         opt = data[i];
//         break;
//     }
// }

// console.log(count);
// console.log(opt);




// --- Time Zone start row class ------------->>



// function getIndianHours() {
//     const indianTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
//     const date = new Date(indianTime);
//     const hours = date.getHours();

//     const formattedTime = date.toLocaleTimeString("en-US", {
//         hour: '2-digit',
//         minute: '2-digit',
//         hour12: true,
//         timeZone: "Asia/Kolkata"
//     });

//     let greeting = "";
//     if (hours < 4 || hours >= 19) greeting = "Good Night";
//     else if (hours < 9) greeting = "Good Morning";
//     else if (hours < 16) greeting = "Good Afternoon";
//     else greeting = "Good Evening";

//     return `${greeting}, it's ${formattedTime} IST`;
// }

// console.log(getIndianHours());


// function getIndianHours() {
//     const hours = new Intl.DateTimeFormat('en-US', {
//         timeZone: 'Asia/Kolkata',
//         hour: 'numeric',
//         hour12: false
//     }).format(new Date());

//     if (hours < 4 || hours >= 19) return "Good Night";
//     if (hours < 9) return "Good Morning";
//     if (hours < 16) return "Good Afternoon";
//     return "Good Evening";
// }

// console.log(getIndianHours());




 // -------------Search linear start row  ----------------->>


// import dupl from "./duplicate.js"; // ✅ Add `.js` extension!
// import sortser from "./sort.js"

// let data = ["jugal", "sharma", "karan", "kanika", "jugal", "karan","anku"];

// let search = "jugal";
// let poist = undefined;


// function LinerSearch(){



//     // -- sort check  ---------------->>
// console.log(sortser(data))

// // Linear search start ------------------>>
// for (let i = 0; i < data.length; i++) {
//     if (data[i] === search) {
//         poist = data[i];
//         break;
//     }
// }

// // Error handling
// if (poist !== undefined) {
//     console.log("use Found in search :", poist);
// } else {
//     console.error("Error:user name  not found! in search");
// }
// }

// LinerSearch()
// // Check for duplicates
// dupl(data);





// // check duplicate


// let data = ["jugal", "sharma", "karan", "kanika" , "jugal" , "karan"];

// let isDuplicate = false;

// for (let i = 0; i < data.length; i++) {
//   for (let j = i + 1; j < data.length; j++) {
//     if (data[i] === data[j]) {
//       isDuplicate = true;
//       console.log("Duplicate found:", data[i]);
//     }
//   }
// }

// if (!isDuplicate) {
//   console.log("No duplicates found");
// }



//linear search 

//duplicate 

// check show many people 

// sort  quick sort 







// let data = "jugal";
// let sea = "jug"; // partial word
// let count = 0;
// let opt = undefined;

// for (let i = 0; i <= data.length - sea.length; i++) {
//     if (data.slice(i, i + sea.length) === sea) {
//         opt = sea;
//         count++;
//         // Optional: break if only first match is needed
//         break;
//     }
// }

// console.log(count); // ➝ 1 if match found
// console.log(opt);   // ➝ 'jug'

// let data = "jugal";
// let sea = "ga";
// let count = 0;
// let opt = undefined;

// let bol = true;

// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < sea.length; j++) {
//         if (data[i] === data[j]) {
//             opt = sea;
//         } else {
//             console.log(undefined);
//         }
//     }
// }

// console.log(opt);







    //     if(sea){

    //         console.log(data)
    //         bol;
    //     }else{

    //         console.log("data  not campare " ,bol=false)
    //     }
    //     break
        

    // }

    // }






// let data = "jugal";
// let sea = "jug";
// let count = 0;
// let opt = undefined;

// for (let i = 0; i <= data.length - sea.length; i++) {
//     let found = true;

//     for (let j = 0; j < sea.length; j++) {

//         // console.log(data[i+j])


//         if (data[i + j] !== sea[j]) {

//             // console.log(data[i + j])
//             console.log(sea[j])

//             found = false;
//             break;
//         }
//     }

//     if (found) {
//         opt = sea;
//         count++;
//         break; // remove this to count all occurrences
//     }
// }

// console.log(count); // ➝ 1
// console.log(opt);   // ➝ 'ug'

// for (let i = 0; i <= data.length - sea.length; i++) {
//     let match = true;

//     for (let j = 0; j < sea.length; j++) {

//         // console.log(data[j])
// console.log(sea[j])
//         if (data[i + j] !== sea[j]) {
//             match = false;
//             break;
//         }
//     }

//     if (match) {
//         count++;
//         opt = sea;
//         break; // remove this if you want to count all matches
//     }
// }

// console.log(count); // ➝ 1
// console.log(opt);   // ➝ 'jug'






// // Create a buffer of 16 bytes
// let buffer = new ArrayBuffer(16);
// console.log(buffer.byteLength); // 16

// // Create a view to work with the buffer
// let view = new Uint8Array(buffer);

// // Set values
// view[0] = 255;
// view[1] = 128;

// arr

// console.log(view); // Uint8Array(16) [255, 128, 0, 0, ...]



// const buffer = new ArrayBuffer(4);
// const view = new DataView(buffer);

// view.setInt32(0, 123456);
// console.log(view.getInt32(0)); // 123456






// let data = ["jugal", "sharma"];

// for (let i = 0; i < data.length; i++) {
//     const word = data[i];
//     for (let j = 0; j < word.length; j++) {
//         console.log(`${word[j]}: ${word.charCodeAt(j)}`);
//     }
// }

// let charCodes = [];

// for (let i = 0; i < data.length; i++) {
//     const word = data[i];
//     for (let j = 0; j < word.length; j++) {
//         charCodes.push({ char: word[j], code: word.charCodeAt(j) });
//     }
// }

// console.log(charCodes);


// let result = {};

// for (let i = 0; i < data.length; i++) {
//     const word = data[i];
//     for (let j = 0; j < word.length; j++) {
//         result[word[j]] = word.charCodeAt(j);
//     }
// }

// console.log(result);



// // Leaky Bucket configuration
// const bucketCapacity = 5; // Maximum capacity of the bucket
// const leakRate = 1; // Number of requests allowed to be processed per second
// let currentLevel = 0; // Current number of requests in the bucket

// // Leak the bucket at a fixed interval
// setInterval(() => {
//     if (currentLevel > 0) {
//         currentLevel--; // Process one request (leak one unit)
//         console.log(`Leaked 1 request. Current level: ${currentLevel}`);
//     }
// }, 1000 / leakRate); // Leak rate in milliseconds


//     if (currentLevel < bucketCapacity) {
//         currentLevel++; // Add request to the bucket
//         console.log(`Request added. Current level: ${currentLevel}`);
 
//     } else {
//         res.status(429).send("Too Many Requests. Please try again later.");
//         console.log("Request rejected. Bucket overflow.");
//     }



// // 🔊 What is Phonetic Search?


// const objArray = [
//     {
//         index: 0,
//         details: {
//             name: "Jugal Sharma",
//             total: 45,
//             accountNumber: "1234567890",
//             email: "jugal@example.com",
//             phone: "9876543210",
//             address: "123 Main St, City, Country",
//             accountType: "Savings",
//             createdAt: new Date().toISOString(),
//         }
//     },
//     {
//         index: 1,
//         details: {
//             name: "Kanika Sharma",
//             total: 69,
//             accountNumber: "0987654321",
//             email: "kanika@example.com",
//             phone: "8765432109",
//             address: "456 Elm St, City, Country",
//             accountType: "Checking",
//             createdAt: new Date().toISOString(),
//         }
//     },
//     {
//         index: 2,
//         details: {
//             name: "Rahul Verma",
//             total: 32,
//             accountNumber: "5678901234",
//             email: "rahul@example.com",
//             phone: "7654321098",
//             address: "789 Pine St, City, Country",
//             accountType: "Savings",
//             createdAt: new Date().toISOString(),
//         }
//     },
//     {
//         index: 3,
//         details: {
//             name: "Simran Kaur",
//             total: 85,
//             accountNumber: "2345678901",
//             email: "simran@example.com",
//             phone: "6543210987",
//             address: "101 Maple St, City, Country",
//             accountType: "Business",
//             createdAt: new Date().toISOString(),
//         }
//     },
  
// ];



// let accountNumber = "1234567890";
// let indexNumber=0
// let newName = "Bad boy";


// let userFound = false;
// for (let i = 0; i < objArray.length; i++) {
//     if (
//         objArray[i].index === indexNumber ||  // Check index
//         objArray[i].details.accountNumber === accountNumber) {
//         console.log(`Before Update: ${objArray[i].details.name}`);
//         objArray[i].details.name = newName;
//         console.log(`After Update: ${objArray[i].details.name}`);
//         userFound = true;
//         break; // Exit loop once the user is found and updated
//     }
// }

// if (!userFound) {
//     console.log("User not found!");
// }

// console.log("After update " , objArray)

// let jsondata = JSON.stringify(objArray); // Correct way to convert data to JSON string
// localStorage.setItem("userData", jsondata); // Stores JSON string in localStorage


// //  Define search criteria
// let indexNumber = 3; // Index to delete
// let username = "Simran Kaur";
// let accountNumber = "6543210987";

// let indexToDelete = -1;

// // Find user by index, name, or account number
// for (let i = 0; i < objArray.length; i++) {
//     if (
//         objArray[i].index === indexNumber ||  // Check index
//         objArray[i].details.name.toLowerCase() === username.toLowerCase() ||  // Check name (case insensitive)
//         objArray[i].details.accountNumber === accountNumber  // Check account number
//     ) {
//         indexToDelete = i;
//         break;
//     }
// }

// // Delete if found
// if (indexToDelete !== -1) {
//     console.log(`Deleting user:`, objArray[indexToDelete]);
//     objArray.splice(indexToDelete, 1);
//     console.log("After deletion:", objArray);
// } else {
//     console.log(`User not found for Index: ${indexNumber}, Name: "${username}", or Account Number: "${accountNumber}"`);
// }




// How It Works:
// Loop through objArray to find the object with the given indexNumber.

// Store its position (indexToDelete).

// Use splice() to remove the object from the array.

// ✅ Now, the object with index: 0 will be removed! 🚀


//https://configr.medium.com/top-10-essential-algorithms-every-software-developer-should-know-and-why-they-matter-b6844fa71f5e

// const tf = require('@tensorflow/tfjs');

// let data = ["lion", "cat", "dog", "elephant"];
// let search = "dog";

// // Convert data to a tensor
// const tensorData = tf.tensor1d(data);

// // Find the index of "dog"
// const matchIndex = data.indexOf(search);

// if (matchIndex !== -1) {
//     console.log(`Found: ${data[matchIndex]} at index ${matchIndex}`);
// } else {
//     console.log("Not Found");
// }


// let account = Math.random().toString(16).slice(2,15);
// console.log(account.toUpperCase());

// let account = Math.random().toString(16).substring(2);
// console.log(account);



// location.assign("https://www.w3schools.com");

// let origin = window.location.origin;

// console.log(origin)


// let isActive=navigator.onLine ?true : false

    
// const objArray = [
//     {
//         index: 0,
//         details: {
//             name: "Jugal Sharma",
//             ...(isActive && { status: "userOnline" }), // Only adds `status: "active"` when `isActive` is true
//                       total: 45,
//                       accountNumber: "1234567890",
//                       email: "jugal@example.com",
//                       phone: "9876543210",
//                       address: "123 Main St, City, Country",
//                       accountType: "Savings",
//                       createdAt: new Date().toISOString(),
//             // identity: { hashPanCard: false, hashAdhaarCard: true },
//         }
//     },
//     {
//         index: 1,
//         details: {
//                       name: "Kanika Sharma",
//             total: 44,
//             accountNumber: "0987654321",
//             email: "kanika@example.com",
//             phone: "8765432109",
//             address: "456 Elm St, City, Country",
//             accountType: "Checking",
//             createdAt: new Date().toISOString(),

// // identity: { hashPanCard: false, hashAdhaarCard: true },
//         }
//     }
// ];

// console.log(objArray )


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



// let isActive=true

    
// const objArray = [
//     {
//         index: 0,
//         details: {
//             name: "Jugal Sharma",
//             ...isActive &&(  {status:"active"}),
//                       total: 45,
//                       accountNumber: "1234567890",
//                       email: "jugal@example.com",
//                       phone: "9876543210",
//                       address: "123 Main St, City, Country",
//                       accountType: "Savings",
//                       createdAt: new Date().toISOString(),
//             // identity: { hashPanCard: false, hashAdhaarCard: true },
//         }
//     },
//     {
//         index: 1,
//         details: {
//                       name: "Kanika Sharma",
//             total: 44,
//             accountNumber: "0987654321",
//             email: "kanika@example.com",
//             phone: "8765432109",
//             address: "456 Elm St, City, Country",
//             accountType: "Checking",
//             createdAt: new Date().toISOString(),

// // identity: { hashPanCard: false, hashAdhaarCard: true },
//         }
//     }
// ];

// console.log(objArray)


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
