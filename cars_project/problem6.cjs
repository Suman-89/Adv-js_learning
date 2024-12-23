const problem6 = (inv) =>{
    let arr = [];
    for(let i=0 ; i<inv.length ; i++){
        if(inv[i].car_make == 'BMW' || inv[i].car_make == 'Audi'){
            arr.push(inv[i]);
        }
    }
    return arr;
}
module.exports = problem6;