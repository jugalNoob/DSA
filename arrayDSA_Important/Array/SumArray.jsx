
:::::::::::::::::::Sum of array elemnt ||||||||||||||||||||||||||||| 

1. first 
let one=[10 , 20 , 30 , -10]
let two=one.reduce((alm , elem)=>{
    return alm + elem
},2)
console.log(two)



2 . second 

2::function maxSubArray(nums) {
  let sum = 0;
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}
// Time Complexity - O(n)
// Space Complexity - O(1)
console.log(maxSubArray([5, 4, -1, 7, 8]));


3 .third  

let data = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < data.length; i++) {
    sum += data[i];
}

console.log("Sum of array:", sum); // Output: 150

