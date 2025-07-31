
//Resvers array //////////////////////!SECTION
      let data = [10, 20, 30, 40, 50];
let start = 0;
let end = data.length - 1;

while (start < end) {
  let temp = data[start];
  data[start] = data[end];
  data[end] = temp;
  start++;
  end--;
}

console.log(data);


// Time Complexity -> O(n)
// Space Complexity -> O(1)

1:::let data=[10 , 20 , 30 , 40 , 50 , 60]
let temp;
function coumters(data,start , end){
    if(start <=end){
        temp=data[start]
        data[start]=data[end]
        data[end]=temp;
    
        coumters(data , start+1  , end -1)
    }
    console.log(data)
}
coumters(data, 0 , data.length -1)

// let start = 10;
// let end = 20;
// [start, end] = [end, start];
// console.log(start, end); // Output: 20 10


let data = [10, 20, 30, 40];  // new methods 
let start = 0;
let end = data.length - 1;

while (start < end) {
    [data[start], data[end]] = [data[end], data[start]];
    start++;
    end--;
}

console.log(data); // Output: [40, 30, 20, 10]



// let one=10
// let two=20
// let temp=one // temp =10
// one=two   // one = 20
// two=temp // two= 10
// console.log("One:", one, "Two:", two)







2:::: Array Swap ::::::::::::: .....................
// let arra1 = [10, 20];
// let arra2 = [30, 40];
  // Swap the arrays using a loop
    for (let i = 0; i < array1.length; i++) {
      let temp = array1[i];
      array1[i] = array2[i];
      array2[i] = temp;
    }
    
    // Print the swapped arrays
    console.log("Swapped Array 1: " + array1);
    console.log("Swapped Array 2: " + array2);
  }

::::::::: New Methods ..............
let array1 = [10, 20];
let array2 = [30, 40];

for (let i = 0; i < array1.length; i++) {
    // Use destructuring to swap the elements
    [array1[i], array2[i]] = [array2[i], array1[i]];
}

// Print the swapped arrays
console.log("Swapped Array 1: " + array1); // Output: [30, 40]
console.log("Swapped Array 2: " + array2); // Output: [10, 20]
