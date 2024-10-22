const items = [1, 2, 3, 4, 5, 5];

function sum(i){
    let add = 0;
    return add+=i ;
}

function reduce(arr,cb,element){
    let  total = 0;
    for(let i=0 ; i<= arr.length ; i++){
        total += arr[i];
    }
    return total;
}
// console.log(items[1]);
console.log(parseInt(reduce(items)));
