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
  
  hello1();