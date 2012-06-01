var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;
inherits(LazyGreeter, EventEmitter);
function LazyGreeter(name) {
  this.name = name;
  this.onTimeout = this.onTimeout.bind(this);
}
LazyGreeter.prototype.greet = function () {
  setTimeout(this.onTimeout, 1000);
}
LazyGreeter.prototype.onTimeout = function () {
  this.emit("greeting", this.name + " says hi.");
}
var agent = new LazyGreeter("Bob");
agent.greet();
agent.on("greeting", console.log);
