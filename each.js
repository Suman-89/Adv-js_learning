const items = [1, 2, 3, 4, 5, 5];

function iteration(i){
    return i;
}

function each(arr,cb){
    for(let i in arr){
      console.log(cb(arr[i]));
    }
}
each(items,iteration);
// console.log(each(items,iteration));
// console.log(iteration(5));