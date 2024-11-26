//Data fetching by async and await
let flag = false;
const p = (param) =>{
    return new Promise((resolve, reject) => {
        if (param == true) {
            resolve('I am resolved');
        }else{
            reject('I am rejected');
        }
    })
}
// console.log(p(true).then(res => res).catch(er => er));

p(false).then(res => console.log(res)).catch(err => console.log(err));
