const problem3 = (inv) =>{
    let arr = [];
    // return inv.car_model
    for(let i = 0 ; i < inv.length ; i++){
        
        arr.push(inv[i].car_model);
        
    }
    let len = arr.length;
    for(let j=0 ; j<len; j++){
        for(k=0 ; k<(len-j-1) ; k++){
            if(arr[k].localeCompare(arr[k+1])>0){
                let temp = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = temp;
            }
        }
    }
    return arr;
}
module.exports = problem3;