var obj = {};       // Create a new object
obj.name = "Tim";   // Give it a name
obj.race = "human"; // It is human right?
obj.hitPoints = 42; // 42 has a nice ring to it.
obj.getDescription = function () {
  return this.name + " the " + this.race + " has " + this.hitPoints + " hitpoints.";
};

var description = obj.getDescription();
