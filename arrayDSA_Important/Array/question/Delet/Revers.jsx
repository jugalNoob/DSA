const data = [9, 8, 7, 6];

let start = 0;
let end = data.length - 1; // end = 3

let count =0
while (start < end) { // 0 < 3 1 < 2 loop out  2 <1



 
    let temp=data[start] //  temp=data[9]

    console.log(temp , 'temp')


    data[start]=data[end]//data[0]=data[6]

    data[end]=temp // data[6]=temp[0]
    start++
    end --
}


🔁 1st Iteration:

temp = data[0]        // temp = 9
data[0] = data[3]     // data[start=0]9 =data[6] 6
data[3] = temp        // data[3] = 9

start++   → 1
end--     → 2

[6, 8, 7, 9]


🔁 2nd Iteration:

temp = data[1]        // temp = 8
data[1] = data[2]     // data[1] = 7
data[2] = temp        // data[2] = 8

start++   → 2
end--     → 1 (loop ends)

[6, 7, 8, 9]


🔁 Loop: while (start < end)


| Iteration | `start` | `end` | Condition (`start < end`) | Action        |
| --------- | ------- | ----- | ------------------------- | ------------- |
| 1         | 0       | 3     | ✅ `0 < 3`                 | Run iteration |
| 2         | 1       | 2     | ✅ `1 < 2`                 | Run iteration |
| 3         | 2       | 1     | ❌ `2 < 1`                 | ❌ Exit loop   |



console.log(data)