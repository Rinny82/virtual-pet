const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('ChaCha')).toBeInstanceOf(Object);
  });

  it('sets the pets name', () => {
    const pet = new Pet('ChaCha');
    expect(pet.name).toEqual('ChaCha');
  });

  it('starts at the age of 0', () => {
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

});