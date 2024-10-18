// const items = [1, 2, 3, 4, 5, 5]; 



// function each(elements,cb){
//     for(let i = 0; i< elements.length ; i ++){
//      cb(elements[i],i);
//     }
// }
// console.log(each(items));

function each(elements, cb) {
    for (let i = 0; i < elements.length; i++) {
        cb(elements[i], i);
    }
    return cb; 
}
const numbers = [1, 2, 3];
each(numbers, (element, index) => {
    console.log(`Element: ${element}, Index: ${index}`);
});
