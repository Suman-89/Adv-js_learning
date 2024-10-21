const items = [1, 2, 3, 4, 5, 5];

function numDouble(i){
    return i*2;
}

function map(arr,cb){
    let doubleNumArr = [];
    for(let i in arr){
        doubleNumArr.push(cb(arr[i]));
    }
    return doubleNumArr;
}

console.log('Original Array -->',items);

console.log('Renewed Array -->',map(items,numDouble));