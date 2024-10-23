// const items = [1, 2, 3, 4, 5, 5];
// function match(p, s) {
//     return p === s;
// }
// function finder(arr, cb) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (!cb(arr[i], arr[i + 1])) {
//             return 'Undefined';
//         }
//     }
//     return arr[arr.length - 1];
// }

// console.log(finder(items, match));

const items = [1, 2, 3, 4, 5, 5];

function match(p, s) {
    return p === s; // Simplified return
}

function finder(arr, cb) {
    for (let i = 0; i < arr.length - 1; i++) { // Iterate until the second last element
        if (!cb(arr[i], arr[i + 1])) { // Use the callback and check if false
            return 'Undefined'; // Return 'Undefined' if not matching
        }
    }
    return arr[arr.length - 1]; // Return the last element if all matches
}

console.log(finder(items, match)); // Outputs: 5
