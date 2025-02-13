let arr = [2,4,4,5,7,9];

let res = function newFunc(param){
    return param.reduce((add,curr)=>{
        if(!add.includes(curr)){
            add.push(curr);
        }
        return add;
    },[]);
}
// console.log(res(arr));

//sum of elements
let sum = function addition(arr){
    return arr.reduce(function(acc,curr){
        return acc + curr ;
    })
}
// console.log(sum(arr));

//find maximum number

let max = function (arr){
    return arr.reduce((acc,curr)=>{
        if(acc < curr) return curr ;
        else return acc;
    },arr[0]);
}
// console.log(max(arr));
// max(arr);

let arr2= [1,2,3,4,5];
// arr2.splice(1,1);

// let arr3 = arr2;

// arr3.splice(1,0,2);
// console.log(arr3);
function revArr(arr){
    let newArr = [];
    for(let i = 4 ; i >= 0 ; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}
// console.log(revArr(arr2));

let arr3 = [1,2,[2,3,[4,5,[8,6,[3,4]]]]];

function flattenArray (param){
    return param.reduce((acc,curr)=>{
        return acc.concat(Array.isArray(curr) ? flattenArray(curr):curr);
    },[]);
}
let newArr = flattenArray(arr3);
// console.log(newArr);

function remDup (arr){
    return arr.reduce((acc,curr)=>{
        if(!acc.includes(curr)){
            acc.push(curr);
        }
        return acc;
    },[]);
}


console.log(remDup(newArr));











