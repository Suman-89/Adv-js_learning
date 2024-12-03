class Person {
    constructor(name) {
      this.name = name;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  class Developer extends Person {
    constructor(name, language) {
      super(name); // Call parent constructor
      this.language = language;
    }
  
    code() {
      console.log(`${this.name} is coding in ${this.language}`);
    }
  }
  
  const dev = new Developer('Bob', 'Python');
  dev.sayHello(); // Hello, my name is Bob
  dev.code();     // Bob is coding in Python