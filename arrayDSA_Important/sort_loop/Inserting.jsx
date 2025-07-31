|||||||||||||--------------------------------------Inserting Sort ----------->


let data=[9 , 6 , 5 , 1 , 2]
for(let i=0; i<data.length; i++){
   let current=data[i]
   let j=i-1
   while(j>=0 && data[j] > current){
      data[j+1] = data[j]
      // j=j-1
      j--
   }
   data[j+1]=current
}
console.log(data)
