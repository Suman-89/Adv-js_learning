// interface suman {
//     name: string;
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// function getName(user: suman) {
//     return `${user}`;
// }
// let un: any = "Dipak";
// // console.log(getName(un));
// // interface Person {
// //     firstName: string;
// //     lastName: string;
// // }
// // function user(param:Person){
// //     return `${param.firstName} ${param.lastName}`;
// // }
// // let candidate = {
// //     firstName : "Suman",
// //     lastName : "Mukherjee"
// // }
// // let result = user(candidate);
// // // console.log(result);
// //Optional Properties
// interface objectName {
//     firstName: string,
//     middleName?: string,
//     lastName: string
// }
// function getObject(name: objectName) {
//     if (name.middleName) {
//         return `${name.firstName} ${name.middleName} ${name.lastName}`;
//     }
//     return `${name.firstName} ${name.lastName}`;
// }
// let user1 = {
//     firstName: "Suman",
//     middleName: "Kumar",
//     lastName: "Mukherjee"
// }
// let candidate1 = getObject(user1);
// // console.log(candidate1);
// //READONLY PROPERTIES
// interface a1 {
//     fn: string,
//     mn: string,
//     readonly ln: string
// }
// function fna1(p: a1) {
//     return `${p.fn} ${p.mn} ${p.ln}`;
// }
// let u1 = {
//     fn: "Rani",
//     mn: "Kumari",
//     ln: "Lokhandawali"
// }
// //readonly property can not be changed
// // console.log(fna1(u1));
// //function types
// // interface stringType {
// //     (str:string,type:boolean):string;
// // }
// // // let b1 = {
// // //     userName:'Suman',
// // //     type:true
// // // }
// // let checkType : stringType ; 
// // checkType = function (str:string,type:boolean){
// //    return type ? str.toLocaleUpperCase():str.toLocaleLowerCase();
// // }
// // console.log(checkType('suman' , true));
// interface sf {
//     (p1: string, p2: boolean): string;
// }
// let newFn: sf;
// newFn = function (p1: string, p2: boolean): any {
//     return p2 ? p1.toLowerCase() : p1.toUpperCase;
// }
// // console.log(newFn('ADI', true));
// //Class types
// interface Json {
//     toJson(): string;
// }
// // toJson(): The method signature defines that any object implementing 
// // the Json interface must have a toJson() method.
// //string: The return type of the toJson() method is string, 
// // meaning the method must return a string representation of the object (typically a JSON string).
// class ds implements Json{
//     constructor (private fn:string , private ln:string){}
//     toJson(): string {
//         return JSON.stringify(this);
//     }
// }
// let suman = new ds('Suman','Mukherjee');
// // console.log(suman);
// type test  = {
//     name:string;
//     title : string,
//     age: Number,
//     id : Number | String
// }
// let suman3 : test = {
//     name : 'Aditi',
//     title: 'Mukherjee',
//     age: 35,
//     id: 45
// }
// // console.log(suman3);
// type test2 = Number ;
// let user3:test2 = 23 ;
// // console.log(user3);
// //example 2
// interface animal {
//     name: string,
//     type: string,
//     count: number,
//     descr():string
// }
// const Dog : animal = {
//     name: "Dog",
//     type: "Labrador",
//     count: 2,
//     descr(){
//         return `${this.name} type is ${this.type}`;
//     }
// }
// // console.log(Dog.descr());
// //example 3
// // interface dog {
// //     name:string,
// //     bark():string
// // }
// // interface cat {
// //     name: string,
// //     mew():string
// // }
// interface Animal {
//     name: string,
//     makeSound():void
// }
// class Dogie implements Animal {
//     name: string;
//     constructor(name:string){
//         this.name = name ;
//     }
//     makeSound(): void {
//         console.log(`${this.name} sounds woof !!`);
//     }
// }
// const dog = new Dogie("Buddy");
// // dog.makeSound();
// //Union type
// function checkUnionType(param : string | number) : void{
//     if( typeof param === 'string') console.log("Param is a string:",param);
//     else if ( typeof param === 'number') console.log("Param is a number:",param);
// }
// // checkUnionType('Suman');
// // checkUnionType(21);
// //Union with objects
// type animaly = {kind : "dog" , breed: string};
// type person = {kind: "human", name: string};
// type p1 = {kind: "any", name: string};
// type animalOrPerson = animaly | person | p1 ;
// function greet (entity : animalOrPerson) {
//     if(entity.kind === "dog") console.log("It is a dog of breed:", entity.breed);
//     else if (entity.kind === "human") console.log("Hi this is:", entity.name);
//     else if (entity.kind === "any") console.log("It is :", entity.name);
// }
// greet({kind: "dog", breed : "Bulldog"});
// greet({kind: "human", name : "Suman"});
// greet({kind:"any", name: "Diana"});
//TS Generics
function getRandomAnyElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [1, 5, 7, 4, 2, 9];
var colors = ['red', 'green', 'blue'];
// console.log(getRandomAnyElement<number>(numbers));
// console.log(getRandomAnyElement<string>(colors));
//merging two object types into one
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var user = merge({ name: "Suman" }, { id: 3 });
// console.log(user);
function merge2(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
console.log(merge2({ name: 'skdkhkh' }, { age: 34 }));
