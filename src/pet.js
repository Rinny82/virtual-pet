const MAX_FITNESS = 10;
const MIN_HUNGER = 0;
function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;

}
Pet.prototype.growUp = function () {
  this.age++;
  this.hunger += 5;
  this.fitness -= 3;
}
Pet.prototype.walk = function () {
  if ((this.fitness + 4) > MAX_FITNESS){
    this.fitness = MAX_FITNESS;
  }else {
    this.fitness += 4;
  }
}

Pet.prototype.feed = function () {
  if ((this.hunger - 3) < MIN_HUNGER){
    this.hunger = MIN_HUNGER;
  }else {
    this.hunger -= 3;
  }
}

Pet.prototype.checkUp = function () {
  if (this.fitness <= 3 && this.hunger >= 5){
    return 'I am hungry AND I need a walk';
  }
  if (this.fitness <= 3){
    return 'I need a walk';
  }
  if (this.hunger >= 5){
    return 'I am hungry';
  }
  return 'I feel great!';
}

module.exports = Pet;