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

  it('increases the pets hunger by 5', () => {
    const pet = new Pet('ChaCha');
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });

  it('increases the pets hunger to 20', () => {
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

  it('decreases the pets fitness by 3', () => {
    const pet = new Pet('ChaCha');
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });

  it('decreases the pets fitness to 1', () => {
    const pet = new Pet('ChaCha');
    pet.growUp();
    pet.growUp();
    pet.growUp();
    expect(pet.fitness).toEqual(1);
  });

});