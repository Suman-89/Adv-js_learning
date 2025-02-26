//removing duplicates from array
let arr = [1, 1, 3, 5, 6, 7, 7];

function removeduplicate(num) {
    return num.filter((p, i) => num.indexOf(p) === i);
}
// removeduplicate(arr);
// console.log(removeduplicate(arr));

//flatten an array
let numArr = [1, [2, [3, 4], 5], 6];

function flatArr(arr) {
    return arr.reduce((acc, value) => acc.concat(Array.isArray(value) ? flatArr(value) : value), []);
}
// console.log(flatArr(numArr));

//reverse a string without using build-in methods

let str = 'Suman';

function reverseString(userName) {
    let emptyStr = '';
    for (let i = userName.length - 1; i >= 0; i--) {
        emptyStr += userName[i];
    }
    return emptyStr;
}
// console.log(reverseString(str));

//Check if a string is a palindrome

let user = 'inrrnia';
function palindromeCheck(userName) {
    let emptyStr = '';
    for (let i = userName.length - 1; i >= 0; i--) {
        emptyStr += userName[i];
    }
    if (emptyStr == userName) {
        return 'palindrome';
    } else {
        return 'not a palindrome';
    }
}
// console.log(palindromeCheck(user)); 

//write a function to deeply clone an object
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    // const deepC = JSON.parse()
    const copy = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]); // Recursively copy each property
        }
    }
    return copy;
}

const original = { a: 1, b: { c: 2 } };
const deepCopyObj = deepCopy(original);

deepCopyObj.b.c = 42;

// console.log(original.b.c); 
// Output: 2

//Anagram checking
let strn1 = 'listen ';
let strn2 = 'enlist';

const anagramCheck = (param) => param.replace(/\s/g, '').toLowerCase().split('').sort().join('');

function checkAn(params1, params2, cb) {
    if (cb(params1) === cb(params2)) {
        return true;
    } else {
        return false;
    }
}
// console.log(checkAn(strn1,strn2,anagramCheck));

//write a function to find first non-repeating letter in a string
let val = 'sumanau';
let finalVal = val.toLowerCase().split('');
// console.log(finalVal);
function findNonRepeat(param){
    const charCount = param.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});
    
     for (let char of param) {
        if (charCount[char] === 1) {
          return char; 
        }
      }
    
}

// console.log(findNonRepeat(finalVal));

function findDuplicates(arr) {
    const newArr = [];
    arr.reduce((acc, curr) => {
        if (acc[curr] && !newArr.includes(curr)) {
            newArr.push(curr);
        }
        
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    return newArr;
}
// findDuplicates(finalVal);
// console.log(findDuplicates(finalVal));

let arr1 = ["apple", "mango", "apple", "orange", "mango", "mango"];
function duplicate(a, b) {
  if (!a.includes(b)){
    a.push(b);
  }
 
  return a;
}

let c = arr1.reduce(duplicate, []);
console.log(c);


