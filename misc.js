let arr = ["df", "rt", "ty", "ew", "de"];
// console.log(arr.indexOf("rt",0));  

// console.log(arr.findIndex((p)=>p=="ty"));


let user = ["Amir", "Suvas", "Dhiman", "Shankar", "Pari"];

// console.log(user.flatMap(p => p));


let str = "I am a good Boy";

let newStr = str.toLowerCase().split(" ").join(" ");
let str2 = newStr.substring(0, 1).toUpperCase() + newStr.substring(1)
// console.log(str2);

function capitalize(param) {
    return param.substring(0, 1).toUpperCase() + param.substring(1);
}

function final(str, cb) {
    return str.map(param => {
        console.log(cb(param));
    })
}
// final(newStr,capitalize)
// console.log(final(newStr,capitalize));

let say = "Impossible";

let newSay = say.split('');

console.log(newSay.reduce(function(arr,curr){
    arr.push(curr);
    return arr;
},[]));


// console.log(newSay);

function makeSentence(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i]);
        if (str[i] == 'i' || str[i] == 'm' || str[i] == 'p' || str[i] == 'o' || str[i] == 's' || str[i] == 'b' || str[i] == 'l' || str[i] == 'e') {
            arr.push(arr[i]);
        }
    }
    return arr;
}
// makeSentence(newSay);
// console.log(makeSentence(newSay));


