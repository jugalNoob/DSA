
:::::::::::::::: ......................................
|||||||||| Remove duplicates array||||||||
function test(data) {
    if (data.length === 0) return 0;

    let i = 0;
    const duplicates = [];

    for (let j = 0; j < data.length; j++) {
     
        if (data[i] !== data[j]) {
            i++;
            data[i] = data[j];
        } else if (i !== j) {
            duplicates.push(data[j]);
        }
    }

    let length = i + 1;

    console.log(length);

    return {
        length,
        unique: data.slice(0, length),
        datas: data,
        duplicates,
    };
}

let data = [0, 1, 1, 2, 2 , 3];

let result = test(data);

console.log(`Length of unique elements: ${result.length}`);
console.log(`Array with unique elements: ${result.unique}`);
console.log(`Full array after removing duplicates: ${result.datas}`);
console.log(`Duplicate elements: ${result.duplicates}`);


 function dupl(data) {
    let isDuplicate = false;
  
    for (let i = 0; i < data.length; i++) {
      for (let j = i + 1; j < data.length; j++) {
        if (data[i] === data[j]) { 
          isDuplicate = true;
          console.log("Duplicate found:", data[i]);
        }
      }
    }
  
    if (!isDuplicate) {
      console.log("No duplicates found");
    }
  }
  

  console.log(dupl([10 , 20 , 20 , 30 , 40 , 40]))



function removeDuplicates(nums) { ///RemoveDuplication Simple 
  for (let i = 0; i < nums.length - 1; i++) {
    // O(n)
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1); // O(1)
      i--;
    }
  }

  return nums.length;
}

// Time Complexity - O(n)
// Space Complexity - O(1)
// console.log(removeDuplicates([1, 1, 2]));


function removeDuplicatesNew(nums) {  /// second remove deUplication 
  if (nums.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}
// Time Complexity - O(n)
// Space Complexity - O(1)
console.log(removeDuplicatesNew([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));







let data = [10, 50, 60, 50, 60, 40];

for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
        if (data[i] === data[j]) {
            console.log(`Duplicate pair: (${data[i]}, ${data[j]}) at indices (${i}, ${j})`);
        }
    }
}

let data = [10, 50, 60, 50, 60, 40];

for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
        if (data[i] === data[j]) {
            console.log(`Duplicate pair: (${data[i]}, ${data[j]}) at indices (${i}, ${j})`);
        }
    }
}