// function filter(elements, cb) {
//     // Do NOT use .filter, to complete this function.
//     // Similar to `find` but you will return an array of all elements that passed the truth test
//     // Return an empty array if no elements pass the truth test
// }

const items = [1, 2, 3, 4, 5, 6, 6, 4];

function match(p, s) {
    return p === s;
}

function filter(elements, cb) {
    let arr = [];
    for (let i = 0; i < elements.length; i++) {
        if (cb(elements[i], elements[i + 1]) === true) {
            arr.push(elements[i]);
        }
    }
    return arr;
}
// console.log(filter(items, match));

function filterArr(arr, cb) {
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        if (cb(arr[index], index,arr)) {
            newArr.push(arr[index]);
        }
    }
    return newArr;
}
function matchElement(p, s) {
    return p === s;
}

// console.log("Filtered Array --> ", filterArr(items, matchElement));


let numArr = [3,4,2,3,4,5,6];

function filterNum (arr) {
    let newArr = [];
    for(let i = 0 ; i< arr.length ; i ++){
        for(let j = 0 ; j < arr.length ; j ++){
            if(i === j){
                newArr.push(arr[j]);
            }
        }
    }
    return newArr;
}
console.log(filterNum(numArr));
