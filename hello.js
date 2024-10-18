const arr = [1,2,4,'hg',89];
// console.log(arr);
function getLength(arr) {
    let size = 0;
    for(let i in arr){
        // console.log(i);
        size ++;
    }
    return size;
}
console.log(getLength(arr));