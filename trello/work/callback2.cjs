const fs = require('fs');

function getListItems(id,fetchData){
    setTimeout(()=>{
        fs.readFile('../../lists.json','utf-8',(err,data)=>{
            if(err){
                console.log(err);
            }else{
                const listInfo = (JSON.parse(data));
                const info = listInfo.filter(ld =>{
                    console.log(ld); 
                    // if(listData.id === id){
                    //     return listData;
                    // }
                });
                fetchData(err,info);
            }
        });
    }, Math.random()*5*1000);
}

module.exports = getListItems;