const items = [1, 2, 3, 4, 5, 5];

function sum(acc,value){
    return acc + value;
}

function reducer(arr,cb,element){
    let  acc = element;
    for(let i in arr){
        acc = cb(acc,arr[i]);
    }
    return acc;
}

console.log(reducer(items,sum,0));
