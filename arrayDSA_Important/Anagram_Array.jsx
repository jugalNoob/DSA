
 
 ::::::::::::::::::::::::Anagram ...........


function  checkAnnar(str1 , str2){
    let objectstr={};
if(str1.length !== str2.length){
    return false;
}
for(ch of str1){
    // console.log(ch)
    objectstr[ch]=(objectstr[ch] || 0) + 1;
}
// console.log(objectstr)
for(ch of str2){
    // console.log(objectstr[ch])
    if(!objectstr[ch]){
        return false  
    }
objectstr[ch]--
}
return true
// console.log(objectstr)
}
// console.log(  checkAnnar("hello" , "olle"))

console.log(  checkAnnar([1 , 2 , 3], [3 , 2 , 1,0]))

1:::
function checkAnagram(input1, input2) {
    const sortedInput1 = [...input1].sort().join('');
    const sortedInput2 = [...input2].sort().join('');

    return sortedInput1 === sortedInput2;
}

console.log(checkAnagram("hello", "olle"));        // true
console.log(checkAnagram([1, 2, 3], [3, 2, 1]));  // true
console.log(checkAnagram("hello", "world"));      // false
console.log(checkAnagram([1, 2, 3], [3, 2, 2]));  // false



function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  
  return s.split('').sort().join('') === t.split('').sort().join('');
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false