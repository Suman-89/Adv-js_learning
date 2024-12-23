const problem2 = (inv) =>{
    for(let i = 0 ; i <= inv.length ; i ++){
        if(inv[i].id == (inv.length)){
            return `Last car is a ${inv[i].car_make} ${inv[i].car_model}` ;
        }
    }
}
module.exports = problem2;