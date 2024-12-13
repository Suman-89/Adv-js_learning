let arr = ["df","rt","ty","ew","de"];
// console.log(arr.indexOf("rt",0));  

// console.log(arr.findIndex((p)=>p=="ty"));


let user = ["Amir", "Suvas", "Dhiman", "Shankar","Pari"];

// console.log(user.flatMap(p => p));


let str = "I am a good Boy";

let newStr = str.toLowerCase().split(" ").join(" ");
let str2 = newStr.substring(0,1).toUpperCase() + newStr.substring(1) 
console.log(str2);

function capitalize(param){
    return param.substring(0,1).toUpperCase() + param.substring(1);
}

function final(str,cb){
    return str.map( param => {
        console.log(cb(param));
    })
} 
// final(newStr,capitalize)
// console.log(final(newStr,capitalize));
