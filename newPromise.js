let test = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('promise 1');
    },2000);
})

const suman = new test;

suman.then((res)=>console.log(res));
