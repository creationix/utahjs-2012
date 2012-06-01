var bob = { name: "Bob" };
bob.greet = function() {
  console.log(this.name + " greets you!");
}

bob.greet();