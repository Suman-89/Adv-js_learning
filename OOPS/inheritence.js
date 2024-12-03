class myClass {
    constructor(p1,p2) {
        this.p1 = p1;
        this.p2 = p2;
    }
    addition(){
        this.sum = this.p1 + this.p2;
        return this;
    }
    substraction(){
        this.sub = (this.p1 - this.p2);
        return this;
    }
    division(){
        this.div = (this.p1 / this.p2);
        return this;
    }
    multiplication(){
        this.mul = (this.p1 * this.p2);
        return this;
    }
}

class child extends myClass{};

let add = new child(3,4).addition().sum;
let sub = new child(3,4).substraction().sub;
let mul = new child(3,4).multiplication().mul;
let div = new child(3,4).division().div;

console.log("Sum-->", add , "Substraction -->", sub, "Multiplication -->", mul ,  "Division -->" , div);