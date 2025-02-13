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
var newFn;
newFn = function (p1, p2) {
    return p2 ? p1.toLowerCase() : p1.toUpperCase;
};
// toJson(): The method signature defines that any object implementing 
// the Json interface must have a toJson() method.
//string: The return type of the toJson() method is string, 
// meaning the method must return a string representation of the object (typically a JSON string).
var ds = /** @class */ (function () {
    function ds(fn, ln) {
        this.fn = fn;
        this.ln = ln;
    }
    ds.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return ds;
}());
var suman = new ds('Suman', 'Mukherjee');
var suman3 = {
    name: 'Aditi',
    title: 'Mukherjee',
    age: 35,
    id: 45
};
var user3 = 23;
var Dog = {
    name: "Dog",
    type: "Labrador",
    count: 2,
    descr: function () {
        return "".concat(this.name, " type is ").concat(this.type);
    }
};
var Dogie = /** @class */ (function () {
    function Dogie(name) {
        this.name = name;
    }
    Dogie.prototype.makeSound = function () {
        console.log("".concat(this.name, " sounds woof !!"));
    };
    return Dogie;
}());
var dog = new Dogie("Buddy");
// dog.makeSound();
//Union type
function checkUnionType(param) {
    if (typeof param === 'string')
        console.log("Param is a string:", param);
    else if (typeof param === 'number')
        console.log("Param is a number:", param);
}
function greet(entity) {
    if (entity.kind === "dog")
        console.log("It is a dog of breed:", entity.breed);
    else if (entity.kind === "human")
        console.log("Hi this is:", entity.name);
}
greet({ kind: "dog", breed: "Bulldog" });
greet({ kind: "human", name: "Suman" });
