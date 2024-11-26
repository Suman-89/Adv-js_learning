function hello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Good");
    }, 2000);
  });
}

async function hello1() {
  console.log("Calling");
  const result = await hello();
  console.log(result);
}

// hello1();

function newFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('I am resolved');
    }, 1000)
  })
}

async function callFunction() {
  console.log("Calling ...");
  let v = await newFunction();
  console.log(v);
}

// callFunction();

async function test() {
  console.log("A");
  await console.log("B");
  console.log("C");
}

// test();
// console.log("D");
// console.log("E");

async function users() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error)
  }
}
// users().then(res => {
//   return res.map(v => console.log(v.name))
// });  

let suman = ['Adi',23];

// var name =  suman[0];
// var age = suman[1];

let [name,age] = suman ;

console.log(name,age);
