// class myClass {
//     constructor(parameters) {
//         this.name = parameters;
//     }
// }

// let v = new myClass('suman');
// console.log(v);

class myClass {
    constructor(parameters,num1,num2) {
        this.name = parameters;
        this.n1 = num1;
        this.n2 = num2;
    }
    hello(){
        console.log(`${this.name} is a good boy`)
    }
    calculation(){
        console.log(`${this.n1}`*`${this.n2}`)
    }
}

let v = new myClass('suman',3,4);
// v.hello();
v.calculation();
// console.log(v);
//methods runs with respect to an object