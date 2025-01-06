interface suman{
    name:string;
}

function getName(user:suman){
    return `${user}`;
}
let un:any = "Dipak";
// console.log(getName(un));


// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function user(param:Person){
//     return `${param.firstName} ${param.lastName}`;
// }

// let candidate = {
//     firstName : "Suman",
//     lastName : "Mukherjee"
// }

// let result = user(candidate);
// // console.log(result);

//Optional Properties
interface objectName{
    firstName : string,
    middleName ?: string,
    lastName : string
}

function getObject(name:objectName){
    if(name.middleName){
        return `${name.firstName} ${name.middleName} ${name.lastName}`;
    }
    return `${name.firstName} ${name.lastName}`;
}

let user1 = {
    firstName : "Suman",
    middleName: "Kumar",
    lastName : "Mukherjee"
}

let candidate1 = getObject(user1);

// console.log(candidate1);

//READONLY PROPERTIES

interface a1{
    fn: string,
    mn : string,
    readonly ln:string
}
function fna1(p : a1){
    return `${p.fn} ${p.mn} ${p.ln}`;
}

let u1 = {
    fn:"Rani",
    mn:"Kumari",
    ln:"Lokhandawali"
}
//readonly property can not be changed
// console.log(fna1(u1));

//function types
interface stringType {
    (str:string,type:boolean):string;
}

// let b1 = {
//     userName:'Suman',
//     type:true
// }
let checkType : stringType ; 
checkType = function (str:string,type:boolean){
   return type ? str.toLocaleUpperCase():str.toLocaleLowerCase();
}
console.log(checkType('suman' , true));

