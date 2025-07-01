

::::::::::  Random array Showing 

let arr = ["jugal" , "skaran" , "anku" , "lion" , "tiger"];
let random=Math.floor(Math.random()*arr.length)
let array=arr[random]
console.log(array)

let arr = ["jugal", "skaran", "anku", "lion", "tiger"];
      let arr1 = ["usa", "indian", "japan", "south africa", 'brazil'];
      let arr2 = [10, 20, 30, 60, 50, 40, 60];
      let arr3 = [10.0, 20.7, 58.5, 69.780];

      // Create an array containing references to the four arrays
      let arrayOfArrays = [arr, arr1, arr2, arr3];

      // Pick a random array from arrayOfArrays
      const randomArrayIndex = Math.floor(Math.random() * arrayOfArrays.length);
      const randomArray = arrayOfArrays[randomArrayIndex];



::::::::::: negativeNumbers   or positiveNumbers

// let data = [12, 20, 30, 40, -1, 3, -60, -5];

// let negativeNumbers = [];
// let positiveNumbers = [];

// // Loop through the array to find negative and positive numbers
// for (let i = 0; i < data.length; i++) {
//   if (data[i] < 0) {   ///  -2 -1 , 0 , 1 , 2 , 12 , 30 
//     negativeNumbers.push(data[i]);
//   } else if (data[i] > 0) { //-2 -1 , 0 , 1 , 2 , 12 , 30 
//     positiveNumbers.push(data[i]);
//   }
// }

// console.log("Negative Numbers:", negativeNumbers);
// console.log("Positive Numbers:", positiveNumbers);

