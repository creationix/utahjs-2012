var greeter = {
  greet: function () {
    console.log(this.name + " greets you!");
  }
};

var bob = Object.create(greeter);
bob.name = "Bob";

bob.greet();