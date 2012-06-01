function makeGreeter(name) {
  return {
    greet: function () {
      console.log(name + " greets you!");
    }
  };
}

var bob = makeGreeter("Bob");

bob.greet();