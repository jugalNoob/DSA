// function checkStringOrNumber(input) {
//     if (typeof input === 'string') {
//         return 'String';
//     } else if (typeof input === 'number' && !isNaN(input)) {
//         return 'Number';
//     } else {
//         return 'Neither a String nor a Number';
//     }
// }

// 5. Reverse the string
const reversedStr = str.split('').reverse().join('');
console.log("Reversed:", reversedStr);

const isPalindrome = str === reversedStr;
console.log(isPalindrome ? "Palindrome" : "Not a palindrome");

// // Example usage:
// console.log(checkStringOrNumber("Hello")); // Output: String
// console.log(checkStringOrNumber(42)); // Output: Number
// console.log(checkStringOrNumber(true)); // Output: Neither a String nor a Number






///////////// Pushing  data check your word information |||||||||||||||||||||||||||

let data = [];
let item = data.length;
let one = ["fuck" , "suck" , "dick" , "bitch"];
function push(value) {
    if (one.includes(value) === data.includes(value)) {
        data.push(value);
    }
}
function display() {
    console.log(data);
}
push("jugal");
push("karan");
push("fuck")
push(30); // Won't be added since it's not in the 'one' array
display(); // Output the content of the data array






/////////// Return const function ??????????????
const one = (ones) => (two) => (three) => console.log(ones, two, three);
one(1)(2)(3);



///Create a custom create  a ProTotype |||||||||||||||||||||||||||||||||||

const one = [10, 20, 30, 40];
console.log(Object.getPrototypeOf(one)); 


Date.prototype.getLastYear = function() {
    return this.getFullYear() - 1; // Get the current year and subtract 1
  };
  
  let date = new Date();
  console.log(date.getLastYear()); // Output: Previous year
  



///Nullish Coalescing Operation 

let objt={
    name:"jugal",
    class:"10th",
    roll:12,
    gender:"male",
    names:""
}
console.log(objt["names"] ?? null);  //show only  undefind or null
console.log(objt["nametyhus"] ?? undefined);
// console.log(objt["nametyhus"] ||  "unknow"); // show 
console.log(objt.name || "kio")



||||||Call Bind Apply ||||||||||||||||||||||||||||||||||||
let student={
    name:"jugal",
    lastname:"sharma",
    age:30,
}

let teacher={
    name:"karan",
    lastname:"sharma",
    age:30,
   
}

 function getemail(){
    return  this.name
}

function chooseage(sub1 ,sub2){
return  [sub1 , sub2]
}

let all=chooseage.bind(teacher,"jugal")//--> 
console.log(all()) ///--> function return 
// console.log(chooseage.call(teacher , "maths" , "english"))
//console.log(chooseage.apply(teacher,["math" , "english"]))  //--> any types of  array use object array value
// console.log(getemail.call(teacher)) --> any types of params mean only string value 
console.log(getemail.call(student))



|||||||||||Arlmar clock Javascript ||||||||||||||||||||


// setInterval(function() {
//     const times = new Date();
//     const hours24 = times.getHours(); // 24-hour format
//     const minutes = times.getMinutes();
//     const seconds = times.getSeconds();
    
//     // Convert hours to 12-hour format
//     const ampm = hours24 >= 12 ? 'PM' : 'AM';
//     const hours12 = (hours24 % 12) || 12; // Handle midnight (0) as 12

//     const alltime = `${hours12} hours ${minutes} minutes ${seconds} seconds ${ampm}`;
    
//     console.log(alltime);
// }, 1000);



setInterval(function() {
    const times = new Date();
    const hours = times.getHours().toString().padStart(2, "0");
    const minutes = times.getMinutes().toString().padStart(2, "0");
    const seconds = times.getSeconds().toString().padStart(2, "0");
    
    const alltime = `${hours} hours ${minutes} minutes ${seconds} seconds`;
    
    console.log(alltime);
}, 1000);

||||||||||||||||||||||||||||||
let str="jugal sharma"
console.log(str.includes("sharma") || " enter a right word ") 
console.log(str.includes("op") || 451) 

if (str.includes("po")) {
  console.log("The string contains 'po'");
} else {
  console.log("Enter the right word.");
}







//Array At() |||||||||||||||||||||||||||||||||||||||||||
let data=[3 , 54 , 4 , 8 , 96 , 41 , 10]

console.log(data.at(0)) //start limit show
console.log(data.at(-1)) //last elemnt show
console.log(data[data.length-1]) //last elemt show


Function SpreAD|||||||||||||||||||
function spread(...values) {
    // Here, 'values' is an array containing all the spread values
    let result = 0;
    for (let value of values) {
        result += value;
    }
    return result;
}

console.log(spread(100, 100, 100, 100)); // Output: 400


function two(...one)
{
    return one
}

console.log(two(100 , 100 , 200))




Function Compostion |||||||||||||||||||||||

function add(a,b){
    return a+b
}

function multi(args){

    return  args[0] * args[1];
}

function square(val){
    return val * val
}

function composeTwo(f1 , f2){
    return function(a, b ){
        return f2(f1(a , b))
    }
}

// function composeUnmite(...fns){
//     return function (...values){
//         fns.reduceRight((a,b)=>b(a),values)
//     }
// }

const composeAll=(...fns)=>(...val)=>fns.reduce((a , b)=>b(a),val);


const c2f=(f1 , f2)=>(a ,b)=>f2(f1(a , b))



const task=composeAll(multi, square)
console.log(task(2 , 3))






||||||||||||||||||||||||||||||||||||||

console.log(window.location.href);
console.log(window.location.protocol);
console.log(window.location.host);
console.log(window.location.pathname);
console.log(window.location.search);
console.log(window.location.hash);


//////////////////////New Loop


let count = 10; // Set an initial value for count

const intervalId = setInterval(() => {
  count--;

  console.log(count);

  if (count === 0) {
    clearInterval(intervalId); // Stop the interval when count reaches 0
  }
}, 1000);




// let count=0
// setInterval(()=>{

//     count ++

//     console.log(count)
// } , 1000)




//////////////////////////////////////Count System New
let count = 0;
const interval = 1000; // Time interval in milliseconds (e.g., 1000ms = 1 second)

const incrementCount = () => {
  count += 20; // Increment count by 20
  console.log(`${count}%`);
  
  if (count === 100) {
    clearInterval(timer); // Stop the interval when count reaches 100%
    console.log("Count reached 100%");
  }
};

const timer = setInterval(incrementCount, interval);



class Top {
    constructor(name) {
      this.name = name;
    }
    hello() {
      console.log("Hello, " + this.name);
    }

    static names(){
        console.log("statcies methods")
    }
  }
  let tops = new Top("Karan"); // Pass the actual name you want to use
  console.log(tops); // Logs the object
  tops.hello();
  Top.names()

  class All extends Top{

    constructor(name,age){
        super(name)
      
        this.age=age
    }

    agess(){
        console.log("name" , this.name)
    }
  }

  let all=new All(45)
  all.agess()
console.log(all)

/////////////////////Binary Number ////////////////////////////

let one = 15;
let binaryString = one.toString(2);
console.log(binaryString); // Output: "1111"
let convert=parseInt(binaryString,2)
console.log(`The decimal value of ${convert} is :${convert}`);



let one = "jugal";
console.log(one.split('').reverse().join(''));

let one = "jugal";
console.log(one.split('').reverse().join(''));
//////////Date Time////////////////////


let one=Date.now()

console.log(one) // this timeStamp

let currentDate = new Date();
console.log(currentDate); // this current data-


const myArray = [1, 2, 3, 4, 5];
delete myArray[2]; // Removes the element at index 2 (3)

console.log(myArray); // Output: [1, 2, undefined, 4, 5]


function callBack ......///////////

function one(a, b) {
    return a + b;
}

function two(a, b) {
    return a * b;
}

function sum(num1, num2, operat) {
    return operat(num1, num2);
}

console.log(sum(5, 5, one)); // Output: 10
console.log(sum(5, 5, two)); // Output: 25

/// Function declaration
function sum(a , b){
    return a+b
}
console.log(sum(5,5))


//function expression
let one=function (a ,b ){
    return a+b
}

console.log(one(5,5))


//function anonymoymous 
// Anonymous function assigned to a variable
const myFunction = function(a, b) {
    return a + b;
};


///////////////////CheckAngram//////////...............

function checkAnagram(input1, input2) {
    const sortedInput1 = [...input1].sort().join('');
    const sortedInput2 = [...input2].sort().join('');

    return sortedInput1 === sortedInput2;
}

console.log(checkAnagram("hello", "olle"));        // true
console.log(checkAnagram([1, 2, 3], [3, 2, 1]));  // true
console.log(checkAnagram("hello", "world"));      // false
console.log(checkAnagram([1, 2, 3], [3, 2, 2]));  // false


/////////////Splice ......................

let data=[10 , 30 , 40]

data.splice(1  , 1 , "jugal")

// first index

// delete 

//update
console.log(data)

/////////////////// ......................Iterator//////////
///Iterator ///!SECTION


// for()

// do while()

// while()

// for of() /// element 

//  for in() // index numbers

//  foreach()

//  map()


/.///////////////.................Generators Function ////////////


///Generator javascript ///!SECTION //!SECTION


function* simples(){
console.log("jugal")
    yield 20;
    yield 30;
    yield 40;
    yield "jugal"
    
    

}
let sg=simples()
console.log(sg.next())
console.log(sg.next().value)
console.log(sg.next())
console.log(sg.next())
console.log(sg.next())

for(let x of sg){
    console.log(`value ${x}`)
}



function* simples(){
let nextsum=0
while(true){
    yield(nextsum++);
}
}
let g=simples()
for(let value of g){
    if(value > 10) break
    console.log(value)
}

////IsArray ////////////////////////////////,...........
let data=[10 , 50 , 5 , 30 , 8 , 6]
let two=data.sort().join(" || ").toString()
let one=Array.isArray(two)
console.log(one)


////Javascript interView 

console.log(undefined == null)
console.log(undefined === null)
console.log(18 == "18")
console.log(18 === 18)
console.log(isNaN(18))
console.log(!isNaN(18))
console.log(18 == 18 || 18 == 17  , " i ma ||")
console.log(18 == 18 && 18 == 18, "i am &&")
console.log(Math.floor(Math.random()*1000))
let hex = `XYZ${Math.random().toString(15).slice(2).padEnd(24, '@gmail.com')}`;
console.log(hex)


///Object in javscript //////////////////

let str="jugal"
let count={}
count["name"]=str
console.log(count)
///////
//changes
a.name="kanran"
//deletes
delete a.ineer
//add values
a.city="mimam"
a['pin code']=181123
console.log(a.name)
console.log(a)
console.log("city" in a)
console.log(a.getData())
// console.log(a.ineer.names)

for(item in a){
    console.warn(item)
    console.log("key" + a[item])
}

let data = {
    name: ["jugal", "sharma"],
    class: "10th"
};

let str = "jua";

console.log(data.name.includes("jugal")); // Check if "jugal" is in the array
console.log(str.includes("j")); // Check if "j" is in the string "jua"


// let obj = [
//     { name: "jugal" },
//     {
//         name: {
//             name: "jugal"
//         }
//     }
// ];

// console.log(obj[1].name);




////////////////////////If else adavance //////////

// const age = 25;
// const hasLicense = true;
// const isDrunk = false;

// if (age >= 18 && hasLicense) {
//   console.log("You are allowed to drive.");
// } else if (age < 18) {
//   console.log("You are too young to drive.");
// } else if (age >= 18 && !hasLicense) {
//   console.log("You need a license to drive.");
// } else if (isDrunk) {
//   console.log("You cannot drive while under the influence of alcohol.");
// } else {
//   console.log("You are not allowed to drive for an unknown reason.");
// }

const age = 25;
const hasLicense = true;

const allowedToDrive = age >= 18 && hasLicense ? "You are allowed to drive." : "You are not allowed to drive.";
console.log(allowedToDrive);


/////////////

Shallow copy and deep copy with code||||||||||||||||||||||||||||||


const originalObject = { name: 'John', age: 30, address: { city: 'New York', state: 'NY' } };
const shallowCopy = { ...originalObject };

console.log(shallowCopy); // { name: 'John', age: 30, address: { city: 'New York', state: 'NY' } }

shallowCopy.name = 'Mary';
shallowCopy.address.city = 'Los Angeles';

console.log(originalObject); // { name: 'John', age: 30, address: { city: 'Los Angeles', state: 'NY' } }
console.log(shallowCopy); // { name: 'Mary', age: 30, address: { city: 'Los Angeles', state: 'NY' } }


//Called Shallow Copy
let obj={
    name:"peter",
    age:{
        city:"LA",
        state:"Link"
    }
}
console.log(obj)
let user={...obj}
// let user=obj
user.name="Jugal sharma"
user.age.city="USA"
console.log(user)


//////LodHash NPM
//deep Copy///!SECTION





///////////////Random Array show in javscript

///Generator javascript ///!SECTION //!SECTION
let arr = ["jugal" , "skaran" , "anku" , "lion" , "tiger"];

// Generate a random index within the range of the array's length
let randomIndex = Math.floor(Math.random() * arr.length);

// Access the random element using the random index
let randomElement = arr[randomIndex];

console.log(randomElement); // This will print a random element from the array


let arr = ["jugal", "skaran", "anku", "lion", "tiger"];
let arr1 = ["usa", "indian", "japan", "south africa", 'brazil'];
let arr2 = [10, 20, 30, 60, 50, 40, 60];

// Create an array containing references to the three arrays
let arrayOfArrays = [arr, arr1, arr2];

// Pick a random array from arrayOfArrays
const randomArrayIndex = Math.floor(Math.random() * arrayOfArrays.length);
const randomArray = arrayOfArrays[randomArrayIndex];

// Now, you can work with the random array
console.log(randomArray);


let intervalId = setInterval(() => {
    let arr = ["jugal", "skaran", "anku", "lion", "tiger"];
    let arr1 = ["usa", "indian", "japan", "south africa", 'brazil'];
    let arr2 = [10, 20, 30, 60, 50, 40, 60];

    // Create an array containing references to the three arrays
    let arrayOfArrays = [arr, arr1, arr2];

    // Pick a random array from arrayOfArrays
    const randomArrayIndex = Math.floor(Math.random() * arrayOfArrays.length);
    const randomArray = arrayOfArrays[randomArrayIndex];
    console.log(randomArray);

    // Stop the interval after the first execution
    // clearInterval(intervalId);
}, 5000);



class Top {
    constructor(name) {
      this.name = name;
    }
    hello() {
      console.log("Hello, " + this.name);
    }

    static names(){
        console.log("statcies methods")
    }
  }
  let tops = new Top("Karan"); // Pass the actual name you want to use
  console.log(tops); // Logs the object
  tops.hello();
  Top.names()

  class All extends Top{

    constructor(name,age){
        super(name)
      
        this.age=age
    }

    agess(){
        console.log("name" , this.name)
    }
  }

  let all=new All(45)
  all.agess()
console.log(all)


||||||||||||||||||||Compara Your array with array |||||||||||||||||||||



let data = [1000];
let data1 = [200];
let data2 = [500];

let dataall = [data, data1, data2];

let dataop = 100;

let found = false; // Initialize a variable to store the result

for (let i = 0; i < dataall.length; i++) {
    if (dataall[i].includes(dataop)) {
        found = true; // Set the variable to true if a match is found
        break; // Exit the loop if a match is found
    }
}

console.log(found);



// let data = [10, 20, 30];
// let data1 = [40, 50, 60];
// let data2 = [70, 80, 90];

// let dataall = [data, data1, data2];

// let dataop = [10 , 20 , 30];

// console.log(dataall.includes(dataop))


// let data = [1000];
// let data1 = [200];
// let data2 = [500];

// let dataall = [data, data1, data2];

// let dataop = [100];
// console.log(dataop.includes(dataall))


// let found = false; // Initialize a variable to store the result

// for (let i = 0; i < dataall.length; i++) {
//     for (let j = 0; j < dataall[i].length; j++) {
//         if (dataop.includes(dataall[i][j])) {
//             found = true; // Set the variable to true if a match is found
//             break; // Exit the inner loop if a match is found
//         }
//     }
//     if (found) {
//         break; // Exit the outer loop if a match is found
//     }
// }

// if (found) {
//     console.log("this is true");
// } else {
//     console.log("There is false");
// }

////////////////////////////////////////////////////////
Set and Map

let one = new Set([10, 30]);
one.add(20);
console.log(one); // Set { 10, 30, 20 }

let one = new Set([10, 30]);
one.delete(10);
console.log(one); // Set { 30 }

let one = new Set([10, 30]);
console.log(one.has(10)); // true
console.log(one.has(20)); // false

let one = new Set([10, 30]);
one.clear();
console.log(one); // Set {}


let one = new Set([10, 30]);

one.forEach((value) => {
  console.log(value);
});

// Output:
// 10
// 30
||||||||||||||||||||||||||
MAp methods

one.forEach((value, key) => {
    console.log(key, value);
});


let one = new Map([
    ["jugal", "kaioaa"],
    ["roll", "10trh"]
]);

console.log(one.get("jugal")); // "kaioaa"

one.set("newKey", "newValue");
console.log(one);


console.log(one.has("roll")); // true
console.log(one.has("nonexistentKey")); // false


one.delete("roll");
console.log(one);


console.log(one.size); // 1 (after deleting "roll")


|||||||||||||||||||Throtted||||||||||||
  <button onclick="sendEmail()">sendEmail</button>
let count = 1;
let isThrottled = false;
function sendEmail() {

    let i="my name is number"
    if (!isThrottled) {
        console.log('Sending', count++ , i);
        isThrottled = true;
        setTimeout(() => {
            isThrottled = false;
        }, 1000);
    }
}


in React.js "||||||||||||||||||||||
  const [loading, SetLoad]=useState()
  const Reand=async()=>{
    SetLoad(true)
 setTimeout(()=>{
    SetLoad(false)
    alert('msg');
    console.log(bal.toString())
    setRand(bal.toString())
  },2000)
}

///exmplae  {loading ? (
  <p>Loading...</p> // Display a loading indicator
) : (
  <>
  <h1>random{rand }</h1>
    
  <button onClick={Reand}>Generate</button>
  <br />
  <br />
      </>
)}

//  <button disabled={isLoading} onClick={ Clicked}>
      {isLoading ? "Adding..." : "Submit"}
      </button>




|||||||||||||||||||||


  <button onclick="debounce(sendEmail, 1000)">sendEmail</button>

let count = 1;
let timeout;

function sendEmail() {
    let i = "my name is number";
    console.log('Sending', count++, i);
}
function debounce(func, delay) {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
}


//Example 
const debounce=()=>{
    let timeout;
    clearTimeout(timeout)
timeout=setTimeout(()=>{
        console.log("jugal sharma")
    },1000)
}
debounce()