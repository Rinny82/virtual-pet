const MAX_FITNESS = 10;
const MIN_FITNESS = 0;
const MIN_HUNGER = 0;
const MAX_HUNGER = 10;
const MAX_AGE = 30;
function Pet(name) {
  if (typeof name != "string")
  { throw new Error("You must provide a name for the pet"); }
  else { this.name = name; }
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
  this.children = [];
}

Pet.prototype = {
  get isAlive() {
    if (this.fitness <= MIN_FITNESS) {
      return false;
    }
    if (this.hunger >= MAX_HUNGER) {
      return false;
    }
    if (this.age >= MAX_AGE) {
      return false;
    }
    return true;
  },
};

Pet.prototype.adoptChild = function (child) {
    if (typeof child === "object") {
      this.children.push(child);
    }
};

Pet.prototype.haveBaby = function (name) {
  this.children.push(new Pet(name));
};

Pet.prototype.growUp = function () {
  if (this.isAlive === false) {
    throw new Error("Your pet is no longer alive :(");
  }
  this.age++;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function () {
  if (this.isAlive === false) {
    throw new Error("Your pet is no longer alive :(");
  }
  if (this.fitness + 4 > MAX_FITNESS) {
    this.fitness = MAX_FITNESS;
  } else {
    this.fitness += 4;
  }
};

Pet.prototype.feed = function () {
  if (this.isAlive === false) {
    throw new Error("Your pet is no longer alive :(");
  }
  if (this.hunger - 3 < MIN_HUNGER) {
    this.hunger = MIN_HUNGER;
  } else {
    this.hunger -= 3;
  }
};

Pet.prototype.checkUp = function () {
  if (this.isAlive === false) {
    return "Your pet is no longer alive :(";
  }
  if (this.fitness <= 3 && this.hunger >= 5) {
    return "I am hungry AND I need a walk";
  }
  if (this.fitness <= 3) {
    return "I need a walk";
  }
  if (this.hunger >= 5) {
    return "I am hungry";
  }
  return "I feel great!";
};


module.exports = Pet;
