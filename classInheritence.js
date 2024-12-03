// document.getElementById("row").addEventListener("click", abc);
// function abc () {
//     document.getElementById("row").style.background = "green";
// }
// document.getElementById("row").removeEventListener("click",abc);

//problem 1
let num = [2,3,4,5,6];

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
    let flag = false;
    if(v < 2 ) {
        flag = false;
    }else if(v >= 2){
        for(let i = 0; i<=v ; i++){
            if(v%i == 0){
                flag = true;
            }
        }
    }else{
        flag = false;
    }
    if(flag = true) return v;
})
console.log(primeNum);

