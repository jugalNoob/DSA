// Visual diagrams to understand it deeper



// data[2] = data[3];

// | Index | 0  | 1  | 2  | 3  |
// | ----- | -- | -- | -- | -- |
// | Value | 10 | 20 | 40 | 40 |

Delete Array Row class --------------------------->>>
let data=[10 , 20 , 30 , 40]

let del=0

let count =0

for(let i=del; i<data.length-1; i++){

    console.log(data[i]) // 30 

    count ++
    data[i]=data[i+1] // data[30]=data[40]
    //data[30]=data[40]

    console.log(data[i]) // 40
}

console.log(count , 'count')
//  So what did your loop do?
// Replaced index 2 (which had 30) with the value at index 3 (40)

// No other replacements happened

// The original 30 is now gone

// The last 40 is still there until you remove it using .length--


//console.log(data) //--> (4) [10, 20, 40, undefined] // undefined (out of bounds)
console.log(data.length);      // 4
data.length = data.length - 1; // 4 → 3
console.log(data.length - 1);  // 3 - 1 = 2
console.log(data.length) // 3 
console.log(data);             // [10, 20, 40]
