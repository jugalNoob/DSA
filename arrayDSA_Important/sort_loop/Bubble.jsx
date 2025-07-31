Sort Bubble |||||||||||||||||||||||||||||||||||||||||||||||
let data=[9 , 8 , 7 , 6 , 5 , 4 , 3 , 2 , 1];
for(let i=0; i<data.length; i++){

    for(let j=0; j<data.length; j++){

        if(data[j]>data[j+1]){

            let temp=data[j];

            data[j]=data[j+1]

            data[j+1]=temp
        }
    }
}
console.log(data)
