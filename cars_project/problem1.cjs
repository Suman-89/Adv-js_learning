const problem1 = (inventory) => {
    for(let i = 0 ; i <= inventory.length ; i++){
        if(inventory[i].id == 33){
            return `Car ${inventory[i].id} is a ${inventory[i].car_year} ${inventory[i].car_make} ${inventory[i].car_model}` ;
        }
    }
}
module.exports = problem1;