
Palindrome string  .......................................
///////////////////////////
function pali(data){
let start=0;
let end=data.length -1;
let result=true;
while(end>start){
    if(data[start] !=data[end]){
        result=false;
    }
    start++;
    end--;
}
return result;
}
let str="hello"
console.log(pali(str))


const reversedStr = str.split('').reverse().join('');
console.log("Reversed:", reversedStr);
const isPalindrome = str === reversedStr;
console.log(isPalindrome ? "Palindrome" : "Not a palindrome");


let data="level"
console.log(data , "not reverse")
let pal=data.split("").reverse().join("")  
console.log(data  == pal ? 'reverse' : 'reverse not')
//console.log(data.split("").reverse().join("").split("").sort().join("")  , "reverse and sort")


