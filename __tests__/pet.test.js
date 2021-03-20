const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("ChaCha")).toBeInstanceOf(Object);
  });

  it("sets the pets name", () => {
    const pet = new Pet("ChaCha");
    expect(pet.name).toEqual("ChaCha");
  });
});

describe("age & growUp", () => {
  it("initial age should be 0", () => {
    const pet = new Pet("ChaCha");
    expect(pet.age).toEqual(0);
  });

  it("increases the pets age by 1", () => {
    const pet = new Pet("ChaCha");
    pet.growUp();
    expect(pet.age).toEqual(1);
  });

  it("grows up to 3", () => {
    const pet = new Pet("ChaCha");
    pet.growUp();
    pet.hunger = 0;
    pet.fitness = 10;
    pet.growUp();
    pet.hunger = 0;
    pet.fitness = 10;
    pet.growUp();
    expect(pet.age).toEqual(3);
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("ChaCha");
    pet.age = 30;
    expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
  });
});

describe("hunger", () => {
  it("initial hunger should be 0", () => {
    const pet = new Pet("ChaCha");
    expect(pet.hunger).toEqual(0);
  });

  it("growUp increases the pets hunger by 5", () => {
    const pet = new Pet("ChaCha");
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });

  // it('growUps increases the pets hunger to 20', () => {
  //   const pet = new Pet('ChaCha');
  //   pet.growUp();
  //   pet.growUp();
  //   pet.growUp();
  //   pet.growUp();
  //   expect(pet.hunger).toEqual(20);
  // });
});

describe("fitness", () => {
  it("initial fitness should be 10", () => {
    const pet = new Pet("ChaCha");
    expect(pet.fitness).toEqual(10);
  });

  it("growUp decreases the pets fitness by 3", () => {
    const pet = new Pet("ChaCha");
    pet.fitness = 10;
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });

  it("walk increases the pets fitness by 4", () => {
    const pet = new Pet("ChaCha");
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });

  it("walk cannot increase fitness > 10", () => {
    const pet = new Pet("ChaCha");
    pet.fitness = 9;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("ChaCha");
    pet.age = 30;
    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
  });
});

describe("feed", () => {
  it("feed decreases hunger by 3", () => {
    const pet = new Pet("ChaCha");
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
  });

  it("feed cannot decrease hunger < 0", () => {
    const pet = new Pet("ChaCha");
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("ChaCha");
    pet.age = 30;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
});

describe("checkUp", () => {
  it("should return the pets demands", () => {
    const pet = new Pet("ChaCha");
    expect(pet.checkUp()).toEqual("I feel great!");
  });

  it("should return the pets demands ( food )", () => {
    const pet = new Pet("ChaCha");
    pet.fitness = 10;
    pet.hunger = 6;
    expect(pet.checkUp()).toEqual("I am hungry");
  });

  it("should return the pets demands ( walk )", () => {
    const pet = new Pet("ChaCha");
    pet.fitness = 3;
    pet.hunger = 0;
    expect(pet.checkUp()).toEqual("I need a walk");
  });

  it("should return the pets demands ( food & walk )", () => {
    const pet = new Pet("ChaCha");
    pet.fitness = 2;
    pet.hunger = 6;
    expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
  });

  it("should return the pets fate (death)", () => {
    const pet = new Pet("ChaCha");
    pet.age = 30;
    expect(pet.checkUp()).toEqual("Your pet is no longer alive :(");
  });
});

describe("isAlive", () => {
  it("getter method returns a boolean", () => {
    const pet = new Pet("ChaCha");
    expect(pet.isAlive).toEqual(true);
  });

  it("getter method returns the other boolean", () => {
    const pet = new Pet("ChaCha");
    pet.age = 33;
    expect(pet.isAlive).toEqual(false);
  });
});

describe("adoptChild", () => {
  it("can adopt a child", () => {
    const parent = new Pet("ChaCha");
    const child = new Pet("Cha");
    parent.adoptChild(child);
    expect(parent.children).toEqual([
      { name: "Cha", age: 0, hunger: 0, fitness: 10, children: [] },
    ]);
  });
  it("can feed a child", () => {
    const parent = new Pet("ChaCha");
    const child = new Pet("Cha");
    child.hunger = 5;
    parent.adoptChild(child);
    parent.children[0].feed();
    expect(child.hunger).toEqual(2);
  });
});

describe("haveBaby", () => {
  it("can have a child", () => {
    const parent = new Pet("ChaCha");
    parent.haveBaby('Cha');
    expect(parent.children).toEqual([
      { name: "Cha", age: 0, hunger: 0, fitness: 10, children: [] },
    ]);
  });
  it("can feed a child", () => {
    const parent = new Pet("ChaCha");
    parent.haveBaby('Cha');
    parent.children[0].hunger = 5;
    parent.children[0].feed();
    expect(parent.children[0].hunger).toEqual(2);
  });
});