// document.getElementById("row").addEventListener("click", abc);
// function abc () {
//     document.getElementById("row").style.background = "green";
// }
// document.getElementById("row").removeEventListener("click",abc);

//problem 1
let num = [2,6,4,5,7];

let newNum = num.map(v =>v*2);

// console.log(newNum);

//problem 2
let evenNum = num.filter(v => v%2 === 0);
// console.log(evenNum);

// problem 3
let sum = num.reduce((acc,curr)=>acc + curr);
// console.log(sum);

// problem 4
let maxNum = num.reduce((acc,curr)=>{
    if(acc>curr) return acc;
    else{
        return curr;
    }
});
// console.log(maxNum);

// problem 5
let primeNum = num.filter(v =>{ 
    // return v
    if(v < 2) return false;
     for(let i = 2 ; i <= Math.sqrt(v) ; i++){
    //    return v%i > 0;
        if(v%i === 0){
            return false;        }
    }
    return true;
})
// console.log(primeNum);

//6 sorting of array

let sortedArr = num.sort((p,s)=>p-s);
// console.log(sortedArr);


//7 Removing duplicate values
let newArr = num.filter((v,i) => num.indexOf(v) === i);
// console.log(newArr);


//8 sum of array elements using rest parameter
function sumOfItems (...args) {
    return args.reduce(function (acc,curr){
        return acc+curr;
    },0);
}
// let newNumArr = num.toString();
// console.log(sumOfItems(2,4,5,6,7));
// console.log(newNumArr);

//9 average of numbers using rest parameter
function avg(...params){
        let sum = params.reduce((acc,curr)=>acc+curr,0);
        return sum / params.length;
}
// console.log(avg(2,4,5,6,7));

// 10 return of largest number by rest parameter
function largestNumber(...args){
    return args.reduce((acc,curr)=>{
        if(acc > curr) return acc;
        else return curr;
    })
}
// console.log(largestNumber(2,4,9,6,11));


//12 returning largeststring using rest parameter
function largestString(...str){
    return str.filter(v => v.length >= 4);
}
console.log(largestString("suman","adi","oioiweoi","dfdr"));
