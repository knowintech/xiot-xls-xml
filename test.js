const add = (function() {
  let count = 0
  return function () {
    return ++count
  }
}())

console.log(add())
console.log(add())
console.log(add())

console.log(add())
console.log(add())
console.log(add())
console.log(add())