//removing duplicates from array
let arr = [1,1,3,5,6,7,7];

function removeduplicate(num){
  return num.filter((p,i) => num.indexOf(p) === i);
}
// removeduplicate(arr);
// console.log(removeduplicate(arr));

//flatten an array
let numArr = [1,[2,[3,4],5],6];

function flatArr(arr){
    return arr.reduce((acc,value)=>acc.concat(Array.isArray(value)?flatArr(value):value),[]);
}
// console.log(flatArr(numArr));

//reverse a string without using build-in methods

let str = 'Suman';

function reverseString(userName){
    let emptyStr = '';
    for(let i = userName.length - 1; i>=0; i--){
        emptyStr+=userName[i];
    }
    return emptyStr;
}
// console.log(reverseString(str));

//Check if a string is a palindrome

let user = 'inrrnia';
function palindromeCheck(userName){
    let emptyStr = '';
    for(let i = userName.length - 1; i>=0; i--){
        emptyStr+=userName[i];
    }
    if(emptyStr == userName){
        return 'palindrome';
    }else{
        return 'not a palindrome';
    }
}
console.log(palindromeCheck(user)); 

