//Armstrong Number

let num = 145;

function numberToArr (int){
    let arr = [];

    while(int > 0){
        arr.unshift(int % 10);
        int = Math.floor(int/10);
    }
    return arr;
}
// console.log(numberToArr(num));
function power(param, length){
    return Math.pow(param,length);
}
function armstrong(param, cb1,cb2){
    let sum = 0;
    let newArr = cb1(param);
    for(let i of newArr){
        // console.log(cb2(i,newArr.length));
        sum += cb2(i,newArr.length);
    }
    if(sum === param){
        return 'This is an Armstrong number';
    }else{
        return 'Not an Armstrong number';
    }
}
// armstrong(num,numberToArr,power);
// console.log(armstrong(num,numberToArr,power));


// Krishnamurthy number
function factor(param){
    if(param<1) return undefined;
    let result = 1;
    for(let i=2 ; i<=param ; i++){
        result *= i;
    }
    return result;
}

function krishnamurthy(param, cb1,cb2){
    let sum = 0;
    let newArr = cb1(param);
    for(let i of newArr){
        // console.log(cb2(i,newArr.length));
        sum += cb2(i,newArr.length);
    }
    if(sum === param){
        return 'This is a Krishnamurthy number';
    }else{
        return 'Not a Krishnamurthy number';
    }
}
// console.log(krishnamurthy(num,numberToArr,factor));

function factorial(num) {
    if (num < 0) return undefined; // Factorial is not defined for negative numbers
    if (num === 0 || num === 1) return 1; // Base case
    return num * factorial(num - 1); // Recursive case
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
