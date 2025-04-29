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

let data = ["jugal", "karan", "anku", "kanika" , "auka"];

let count = 0;
let opt = undefined;

let search = "ankj";

for (let i = 0; i < data.length; i++) {
    count++;

    // manual comparison of first 3 characters
    if (
        data[i][0] === search[0] &&
        data[i][1] === search[1] &&
        data[i][2] === search[2]
    ) {
        opt = data[i];
        break;
    }
}

console.log(count);
console.log(opt);
