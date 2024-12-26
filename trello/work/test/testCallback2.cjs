const callback = require('../callback2.cjs');

callback('qwsa221' , (err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});