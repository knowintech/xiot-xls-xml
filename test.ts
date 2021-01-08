const add =  (() => {
  let count = 1;
  return () => {
    count = count + 1;
    return count;
  };
})();
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());

class a {
  b: number;
  constructor() {
    this.init()
  }
  init() {
    this.b = 1
  }
}
