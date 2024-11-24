//Shallow copy
const obj1 = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, obj1);
// shallowCopy.b.c = 5;
// console.log(shallowCopy);
// console.log('Original array -->',obj1);

// Deep Copy
const deepCopy = structuredClone(obj1);
deepCopy.b.c = 42;
console.log(obj1.b.c);