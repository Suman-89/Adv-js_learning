function Calling() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve('I am called');
        },500);
    })
}

async function called() {
    console.log('Calling.....');
    const result = await Calling();
    console.log(result);
}

// called();

async function suman(){
    console.log('Waiting.....');
    const res = await called();
    console.log(res);
}
// suman();

async function play(){
    console.log('test 1');
    await console.log('test 2');
    console.log('test 3');
    
}
play();