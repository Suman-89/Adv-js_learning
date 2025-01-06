function getName(user) {
    return "".concat(user);
}
var un = "Dipak";
function getObject(name) {
    if (name.middleName) {
        return "".concat(name.firstName, " ").concat(name.middleName, " ").concat(name.lastName);
    }
    return "".concat(name.firstName, " ").concat(name.lastName);
}
var user1 = {
    firstName: "Suman",
    middleName: "Kumar",
    lastName: "Mukherjee"
};
var candidate1 = getObject(user1);
function fna1(p) {
    return "".concat(p.fn, " ").concat(p.mn, " ").concat(p.ln);
}
var u1 = {
    fn: "Rani",
    mn: "Kumari",
    ln: "Lokhandawali"
};
// let b1 = {
//     userName:'Suman',
//     type:true
// }
var checkType;
checkType = function (str, type) {
    return type ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(checkType('suman', true));
