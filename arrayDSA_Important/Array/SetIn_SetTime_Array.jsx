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




let rate = 5;
let incrementing = false; // Track whether we are incrementing or decrementing

const interval = setInterval(() => {
    console.log(rate);

    if (!incrementing) {
        rate--;
        if (rate === 0) {  // Change the condition to stop at 0
            incrementing = true; // Switch to increment mode
        }
    } else {
        rate++;
        if (rate === 5) {  // Change the condition to stop at 5
            incrementing = false; // Switch back to decrement mode
        }
    }

}, 2000);



let rate = 5;
let step = -1; // -1 for decrementing, +1 for incrementing

const interval = setInterval(() => {
    console.log(rate);
    rate += step; // Increment or decrement based on the step value

    // Reverse the direction at boundaries
    if (rate === 0 || rate === 5) {
        step *= -1; // Flip the direction
    }

}, 2000);





::::::::::::::: SetInterval Items with array :::::::::::::::::::::::::::::::::::::::::::

let count = 0;

let clearall = setInterval(() => {
  let array = ["jugal", "karans", "lion", "usa"];

  console.log(array);

  if (count === 3) {
    array.length = 0; // Deletes all elements in the array
    console.log(array, "delete all array");
  }

  count++;

  console.log(count);

  if (count == 5) {
    console.log("stopping...");
    clearInterval(clearall);
  }
}, 2000);
