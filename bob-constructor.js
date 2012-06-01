function Greeter(name) {
  this.name = name;
}
Greeter.prototype.greet = function () {
  console.log(this.name + " greets you!");
};

var bob = new Greeter("Bob");

bob.greet();