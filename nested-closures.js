function first(a) {
  return function second(b) {
    return function third(c) {
      return a + b + c;
    };
  };
}

var second = first("Hello");
var third = second(42);
console.log(third("World"));
