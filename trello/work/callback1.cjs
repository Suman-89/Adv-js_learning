const fs = require('fs');
function callback1 (id,cb) {
    setTimeout(() => {
        fs.readFile('../../boards.json','utf-8',(err,data)=>{
            if(err){
                console.log(err);
            } else {
                const boardInfo = (JSON.parse(data));
                const info = boardInfo.filter(vdata => {
                    if(vdata.id === id){
                        return vdata;
                    }
                });
                cb(err,info);
            }
        })
    }, Math.random()*5*1000);
}
module.exports = callback1;