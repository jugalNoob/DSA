
// random color generator
const getRandomColor = () => {
     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
let io=getRandomColor()
 console.log(io)


// compact array value  .....................:::::::::::::::::::::::::::
const compact=(array)=>{
   return array.filter(Boolean)
}

console.log(compact([1, 2, '', 3, '', 4, 5])) // [1, 2, 3, 4, 5]



// Repeating without Loop  ...................................:::::::::
console.log("1".repeat(4));

// Random Number Gen ...............................:::::::::::::::::

const random = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min;
 };
 
 // Example usage
 const min = 5;
 const max = 15;
 const randomNumber = random(min, max);
 console.log(randomNumber); // Output: A random number between 5 and 15 (inclusive)
 

// Digitize Number to array .................................::::::::::::::::::::::::
const convertToArray = (number) => {
   return [...`${number}`].map(el => parseInt(el));
 };
 
 // Example usage
 const number = 12345;
 const digitArray = convertToArray(number);
 console.log(digitArray); // Output: [1, 2, 3, 4, 5]
 


 // revers string without methods  ..............................::::::::::::::::::::::::

let string="jugal sharma"

let reversedstring=""

for(let index=string.length-1; index >= 0; index--){

   reversedstring+=string[index]
}

console.log(reversedstring); // Output:



//Ternary Operator .....................:::::::::::::::::::



const isloggedIn=true

const button=isloggedIn ? "log out" : "log in"


console.log(button)
