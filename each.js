const items = [1, 2, 3, 4, 5, 5];

function iteration(i){
    return i;
}

function each(arr,cb){
  let newArr = [];
    for(let i in arr){
      newArr.push(cb(arr[i]));
    }
    return newArr;
}
let newVar = each(items,iteration);
// newVar.filter(i)
// console.log(newVar);
function remDup(params){
  return params.reduce((acc,curr)=>{
    if(!acc.includes(curr)) acc.push(curr);
    return acc;
  },[]);
}
// console.log(remDup(newVar));

//counting occurance
function repeat(param){
  return param.reduce((acc,curr)=>{
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  },{})
}
console.log(repeat(items));
// console.log(each(items,iteration));
// console.log(iteration(5));