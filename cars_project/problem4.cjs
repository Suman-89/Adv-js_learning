const problem4 = (inv) =>{
    let arr = [];
    for(let i=0 ; i< inv.length ; i++){
        if(inv[i].car_year < 2000){
            arr.push(inv[i]);
        }
    }
    return arr;
}
module.exports = problem4;