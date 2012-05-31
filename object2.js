// A constructor is simply a function that's meant to be called with `new`
function Person(name, race, hitPoints) {
  this.name = name;
  this.race = race;
  this.hitPoints = hitPoints;
}
// Add a shared method to the constructor's object prototype
Person.prototype.getDescription = function () {
  return this.name + " the " + this.race + " has " + this.hitPoints + " hitpoints.";
}
// Create a new instance of the Person class.
var obj = new Person("Tim", "human", 42);
// Call the `getDescription` method of this class instance.
console.log(obj.getDescription());
// -> Tim the human has 42 hitpoints.