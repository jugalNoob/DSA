
let data = [10, 20, 30, 40, 50, 60, 80];
let op = 20;
for (let i = 0; i < data.length; i++) {
    if (data[i] > op) {
        console.log(data[i]);
    } else {
        console.log("Number is greater than ",op);
    }
}



////  ------------------>> Filter with a letter  ////////////  ------------->

function filter(str, letter) {
   let filteredStr = [];
   for (let i = 0; i < str.length; i++) {
       if (str[i][0].toLowerCase() !== letter.toLowerCase()) {  // !==  ====
           console.log(str[i]);
           filteredStr.push(str[i]);  // Add the element to filteredStr if it meets the condition
       } else {
           console.log("The first letter is not", letter);
       }
   }
   return filteredStr;
}
let str = ['jugal', 'aki', 'boy', 'cart', 'aus', 'arabic', 'body'];
let letter = "c";
let result = filter(str, letter);
console.log("Filtered array:", result);






// object serach with index number  ----> ----------------------
const objs = {
   0: {
       name: "Jugal",
       rollno: 45,
       identity: { hashPanCard: false, hashAdhaarCard: true },
   },
   1: {
       name: "Karan",
       rollno: 20,
       identity: { hashPanCard: false, hashAdhaarCard: true },
   }
};

console.log(objs)
let search = 1;
let post = undefined;

for (let i in objs) { // Looping through keys of the object
   if (i == search) { // Checking if the key matches `search`
       post = objs[i]; // Assigning the matching object to `post`
       break; // Exit loop once found
   }
}

console.log(post);








let obj = {
   name: "Jugal",
   hobbies:["walking" , "Reading"],
   age: 25,
   country: "India",
   identity:{hashPanCard:false , hashAdhaarCard:true},
   address: ["India", "USA"] // Changed {} to []
};


console.log(obj.hobbies[0])
console.log(obj.name)
console.log(obj.identity.hashPanCard)






const objArray = [
   {
       index: 0,
       details: {
           name: "jugal",
           rollno: 45,
           identity:{hashPanCard:false , hashAdhaarCard:true},
       }
   },
   {
       index: 1,
       details: {
           name: "karan",
           rollno: 20,
           identity:{hashPanCard:false , hashAdhaarCard:true},
       }
   }
];

console.log(objArray)

console.log(objArray[0])


const objs = {
    0: {
        name: "jugal",
        rollno: 45,
        identity:{hashPanCard:false , hashAdhaarCard:true},
    },
    1: {
        name: "karan",
        rollno: 20,
        identity:{hashPanCard:false , hashAdhaarCard:true},
    }
};

console.log(objs)




/// Api search Very Important code ----------------->>
const apisear = async () => {
   // Await the fetch call to get the response
   let data = await fetch("https://jsonplaceholder.typicode.com/users");
   let apis = await data.json();
 //  console.log(apis); // This will log the actual data


   // // Search index in api  --------------------->><><>
   let sear=3
   for(let i  in apis){
      if(i == sear){
         console.log(apis[i]);

         break;
      }
   }


   //user id Index use 


   let sears = 3; // User id to search for
   for (let user of apis) {
     if (user.id === sears) {
       console.log(user); // Logs the user object with the id of 3
       break; // Exit the loop once the user is found
     }
   }


    /// search with your name  ----------------------------->

    let sears = 'Leanne Graham'; // User id to search for
for (let user of use) {
  if (user.name === sears) {
  
    console.log(user); // Logs the user object with the id of 3
    break; // Exit the loop once the user is found
  }
}



}
apisear();



:::::::::: Advanace serach :::::::::::
Linear search
// function All() {
//     const allone = document.getElementById("check").value;
//     let array=["jugal" , "karan" , "knaika" , "anku"]
//     let pos=allone
//     for(let i=0; i<array.length; i++){
//         if(array[i]==pos){
//             alert("yes")
//             console.log(pos)
//             break;
//         }else{
//             console.log("check name")
//             break;
//         }
//     }

// }


:::::: Object serach .....................apisear
function All() {
    const allone = document.getElementById("check").value;
    let data = {
        'name1': "knaika",
        'name2': 'jugal',
        'name3': 'kanika',
        'name4': 'ridhima',
        'name5': 'anki',
        'age':'23',
        'gender': "male"

    };
    let found = false;
    for (let key in data) {
        if (data[key] === allone) {
            found = true;
            console.log(allone + " found");
            break;
        }
    }
    if (!found) {
        console.log("check name");
    }
}



let data = {
    'name1': "knaika",
    'name2': 'jugal',
    'name3': 'kanika',
    'name4': 'ridhima',
    'name5': 'anki',
    'age': '23',
    'gender': "male"
 };
 
 let search = 'age';
 let post = undefined;
 
 for (let one in data) {
    if (one === search) {
        post = data[one];
        break; // Once found, no need to continue the loop
    }
 }
 
 console.log(post);

 



 
Binary Search with Iterative approac  ::::::::::::::::::::

let data = [5, 9, 13, 17,45,67,89,100];
let find = 89;
let start = 0;
let end = data.length - 1;
let position = undefined;
while (start <= end) {
let mid = Math.floor((start + end) / 2);
// console.warn(data[mid]);
if (data[mid] === find) {
 position = mid;
 break;
} else if (data[mid] < find) {
 start = mid + 1;
} else {
 end = mid - 1;
}
}
console.warn(position)
