::::: Merge with ..................................

1.first
let data1=[1 , 2  , 2 , 3]
let data2=[7 , 8 , 9 , 10]
let data3=[]
for(let i=0; i<data1.length; i++){
    data3[i]=data1[i]
}
console.log(data3)
for(let i=0; i<data2.length; i++){
    data3[data1.length+i]=data2[i]
}
console.log(data3)

2. second

let data1=[1, 2 , 3]
let data2=[4 , 5 , 6]
let data3=[...data1 , ...data2]
console.log(data3)

3.third 
let data4=data1.concat(data2)
console.log(data4)