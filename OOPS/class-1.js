class newClass {
        constructor(p1,p2){
            this.p1 = p1;
            this.p2 = p2;
        }
    
        met(){
            console.log(`${this.p1} and ${this.p2}`);
        }
    
    }
    
    class child extends newClass{
        constructor(param,c){
            super(param,c);
            console.log(param,c);
        }
    };
    //super keyword calls the value of parent to the child.
    let newChild = new child(34,56);
    
    // newChild.met();


    class suman{
        constructor(param){
            this.name = param;
        }
        showName(param){
            console.log(`My name is --> ${param}`);
        }
    }
    class user extends suman{
        constructor(par){
            super(par);
            // console.log(par);
        }
    }
    let newUser = new user("Suman");
    newUser.showName("Suman");