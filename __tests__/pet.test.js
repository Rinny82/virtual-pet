const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('ChaCha')).toBeInstanceOf(Object);
  });

  it('sets the pets name', () => {
    const pet = new Pet('ChaCha');
    expect(pet.name).toEqual('ChaCha');
  });

  it('initial age should be 0', () => {
    const pet = new Pet('ChaCha');
    expect(pet.age).toEqual(0);
  });

  it('increases the pets age by 1', () => {
    const pet = new Pet('ChaCha');
    pet.growUp();
    expect(pet.age).toEqual(1);
  });

  it('grows up to 3', () => {
    const pet = new Pet('ChaCha');
    pet.growUp();
    pet.growUp();
    pet.growUp();
    expect(pet.age).toEqual(3);
  });

  it('initial hunger should be 0', () => {
    const pet = new Pet('ChaCha');
    expect(pet.hunger).toEqual(0);
  });

  it('growUp increases the pets hunger by 5', () => {
    const pet = new Pet('ChaCha');
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });

  it('growUps increases the pets hunger to 20', () => {
    const pet = new Pet('ChaCha');
    pet.growUp();
    pet.growUp();
    pet.growUp();
    pet.growUp();
    expect(pet.hunger).toEqual(20);
  });

  it('initial fitness should be 10', () => {
    const pet = new Pet('ChaCha');
    expect(pet.fitness).toEqual(10);
  });

  it('growUp decreases the pets fitness by 3', () => {
    const pet = new Pet('ChaCha');
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });

  it('growUps decreases the pets fitness to 1', () => {
    const pet = new Pet('ChaCha');
    pet.growUp();
    pet.growUp();
    pet.growUp();
    expect(pet.fitness).toEqual(1);
  });

  it('walk increases the pets fitness by 4', () => {
    const pet = new Pet('ChaCha');
    pet.growUp();
    pet.growUp();
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });

  it('walk cannot increase fitness > 10', () => {
    const pet = new Pet('ChaCha');
    pet.growUp();
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });

  it('feed decreases hunger by 3', () => {
    const pet = new Pet('ChaCha');
    pet.growUp();
    pet.growUp();
    pet.feed();
    expect(pet.hunger).toEqual(7);
  });

  it('feed cannot decrease hunger < 0', () => {
    const pet = new Pet('ChaCha');
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });

  it('should return the pets demands', () => {
    const pet = new Pet('ChaCha');
    expect(pet.checkUp()).toEqual("I feel great!");
  });

  it('should return the pets demands ( food )', () => {
    const pet = new Pet('ChaCha');
    pet.growUp();
    pet.growUp();
    expect(pet.checkUp()).toEqual("I am hungry");
  });

  it('should return the pets demands ( walk )', () => {
    const pet = new Pet('ChaCha');
    pet.growUp();
    pet.growUp();
    pet.growUp();
    pet.feed();
    pet.feed();
    pet.feed();
    pet.feed();
    expect(pet.checkUp()).toEqual("I need a walk");
  });

  it('should return the pets demands ( food & walk )', () => {
    const pet = new Pet('ChaCha');
    pet.growUp();
    pet.growUp();
    pet.growUp();
    pet.feed();
    pet.feed();
    pet.feed();
    expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
  });

  it('getter method returns a boolean', () => {
    const pet = new Pet('ChaCha');
    expect(pet.isAlive).toEqual(true);
  });

  it('getter method returns the other boolean', () => {
    const pet = new Pet('ChaCha');
    pet.growUp();
    pet.growUp();
    expect(pet.isAlive).toEqual(false);
  });
});