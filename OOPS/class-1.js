class newClass {
        constructor(p1,p2){
            this.p1 = "p1";
            this.p2 = "p2";
        }
    
        met(){
            console.log(`${this.p1} and ${this.p2}`);
        }
    
    }
    
    class child extends newClass{
        constructor(param){
            super(param);
            console.log(param);
        }
    };
    //super keyword calls the value of parent to the child.
    let newChild = new child(34,56);
    
    newChild.met();