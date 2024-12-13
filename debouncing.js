function call1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Call 1 resolved');
        },1000);
    })
}

function call2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Call 2 resolved');
        },2000);
    })
}

let result = Promise.all([call1(),call2()]);

// result.then(r => console.log(r)).catch(e => console.log(e));

//remove duplicate from an array without any array method

let arr = [2,3,4,5,6,2,4];

function removeDuplicate(num){
    let newObj = [];

    for(let i = 0 ; i<num.length ; i ++){
        // console.log(i);
        let flag = false;
        for(let j = 0 ; j< newObj.length; j++){
            if(newObj[j] === num[i]){
                flag = true;
            }
        }
        if(flag !== true){
            newObj.push(num[i]);
        }
        
    }
    return newObj;
}
// console.log(removeDuplicate(arr));

//remove duplicates by using reduce

function duplicateRemoval(arr){
    return arr.reduce((acc,curr)=>{
       if(!acc.includes(curr)){
        acc.push(curr);
        // acc[curr]=(acc[curr] || 0) + 1 ;
       }
       return acc;
    },[])
}
console.log(duplicateRemoval(arr));
// duplicateRemoval(arr);

//counting occuarances of each elements using reduce

function countOccur(arr){
    return arr.reduce((acc,curr)=>{
        acc[curr]=(acc[curr] || 0)+1;
        return acc;
    },{})
}
console.log(countOccur(arr));
