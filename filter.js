// function filter(elements, cb) {
//     // Do NOT use .filter, to complete this function.
//     // Similar to `find` but you will return an array of all elements that passed the truth test
//     // Return an empty array if no elements pass the truth test
// }

const items = [1, 2, 3, 4, 5, 6];

function match(p,s){
    return p === s;
}

function filter(elements, cb){
    let arr = [];
    for(let i=0; i<elements.length;i++){
        if(cb(elements[i],elements[i+1]) === true ){
            arr.push(elements[i]);
        }
    }
    return arr;
}
console.log(filter(items,match));

