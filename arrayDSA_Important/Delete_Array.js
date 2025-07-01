

///////////////////////////  ........deleting .........

// // console.log(  checkAnnar("hello" , "olle"))
let data=[10 , 20 , 30 , 540]

let del=0;

for(let i=0; i<data.length; i++){

    data[i]=data[i+1]

}
data.length=data.length-1;
console.log(data)

::::: Delete center of array elemnt 

 let data = [10, 20, 30, 40, 50];
let centerIndex = Math.floor(data.length / 2);

 console.log(centerIndex)

 Shift elements to the left to overwrite the middle element
for (let i = centerIndex; i < data.length - 1; i++) {
    data[i] = data[i + 1];
}

Remove the last element since it's now duplicated
data.length--;

console.log(data); Output: [10, 20, 40, 50]


