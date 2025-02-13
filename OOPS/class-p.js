class suman{
    constructor(p1,p2){
        this.p1 = p1;
        this.p2 = p2;
    }
    setName(){
        return `${this.p1} lives in ${this.p2}`;
    }
}

class myChild extends suman{
    constructor(s1,s2){
        super(s1,s2);
    }
}

let res = new myChild('Suman','Kolkata').setName();
console.log(res);