// function find(elements, cb) {
//     // Do NOT use .includes, to complete this function.
//     // Look through each value in `elements` and pass each element to `cb`.
//     // If `cb` returns `true` then return that element.
//     // Return `undefined` if no elements pass the truth test.
// }

const items = [1, 2, 2, 4, 4];

// console.log(items.find(s => s>2));

function match(p,s){
    return p === s ;
};

function finder(arr,cb){
   for(let i=0;i< arr.length ; i++){
    // console.log(cb(arr[i],arr[i+1]));
    if(cb(arr[i],arr[i+1])===true){
        console.log(arr[i]);
    }
   }
}
finder(items,match);
// console.log(match(3,3));

// console.log(finder(items));

