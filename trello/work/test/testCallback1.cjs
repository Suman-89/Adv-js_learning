const boardInfo = require('../callback1.cjs');

boardInfo('mcu453ed',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})