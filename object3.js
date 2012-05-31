function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
console.log(this.name + " says hi!");
};
var tim = new Person("Tim");

// Tell tim to greet us now
tim.greet(); // -> Tim says hi!

// Tell tim to greet us in 500ms
setTimeout(tim.greet, 500); // -> undefined says hi!
