// Flattens a nested array (the nesting can be to any depth).
// Hint: You can solve this using recursion.
// Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

const nestedArray = [1, [2], [[3]], [[[4]]]]; 

function flatten(elements) {
    return elements.reduce((acc,curr)=>{
        return  acc.concat(Array.isArray(curr)?flatten(curr):curr);
    },[]);
}

// console.log(flatten(nestedArray));

function flattenArr(arr){
    let result = [];
    arr.forEach(element => {
        Array.isArray(element) ? result = result.concat(flattenArr(element)): result.push(element);
    });
    return result;
}
console.log(flattenArr(nestedArray));

