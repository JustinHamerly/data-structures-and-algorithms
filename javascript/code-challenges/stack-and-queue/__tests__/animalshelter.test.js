'use strict';

const { AnimalShelter, Dog, Cat, Animal } = require('../classes/animalshelter');

describe('testing animal shelter functions', () => {

  it('should be able to enqueue a dog', () => {
    let shelter = new AnimalShelter;
    let dog1 = new Dog('Beethoven');

    shelter.enqueue(dog1);

    expect(shelter.dogs.count).toBe(1);
    expect(shelter.cats.count).toBe(0);
    expect(shelter.allAnimals.count).toBe(1);
  });

  it('should be able to enqueue multiple dogs', () => {
    let shelter = new AnimalShelter;
    let dog1 = new Dog('Beethoven');
    let dog2 = new Dog('Buddy');

    shelter.enqueue(dog1);
    shelter.enqueue(dog2);

    expect(shelter.dogs.count).toBe(2);
    expect(shelter.cats.count).toBe(0);
    expect(shelter.allAnimals.count).toBe(2);
  });

  it('should be able to enqueue a cat', () => {
    let shelter = new AnimalShelter;
    let cat1 = new Cat('Sassy');

    shelter.enqueue(cat1);

    expect(shelter.dogs.count).toBe(0);
    expect(shelter.cats.count).toBe(1);
    expect(shelter.allAnimals.count).toBe(1);
  });

  it('should be able to enqueue multiple cats', () => {
    let shelter = new AnimalShelter;
    let cat1 = new Cat('Sassy');
    let cat2 = new Cat('Crookshanks');

    shelter.enqueue(cat1);
    shelter.enqueue(cat2);

    expect(shelter.dogs.count).toBe(0);
    expect(shelter.cats.count).toBe(2);
    expect(shelter.allAnimals.count).toBe(2);
  });

  it('should be able to dequeue a dog', () => {
    let shelter = new AnimalShelter;
    let dog1 = new Dog('Beethoven');
    let dog2 = new Dog('Buddy');

    shelter.enqueue(dog1);
    shelter.enqueue(dog2);

    let dog = shelter.dequeue('dog');

    expect(dog.name).toBe('Beethoven');
    expect(shelter.dogs.count).toBe(1);
    expect(shelter.allAnimals.count).toBe(1);

  });

  it('should be able to dequeue all dogs', () => {
    let shelter = new AnimalShelter;
    let dog1 = new Dog('Beethoven');
    let dog2 = new Dog('Buddy');

    shelter.enqueue(dog1);
    shelter.enqueue(dog2);

    shelter.dequeue('dog');
    shelter.dequeue('dog');

    expect(shelter.dogs.count).toBe(0);
    expect(shelter.allAnimals.count).toBe(0);

  });

  it('should be able to dequeue a cat', () => {
    let shelter = new AnimalShelter;
    let cat1 = new Cat('Sassy');
    let cat2 = new Cat('Crookshanks');

    shelter.enqueue(cat1);
    shelter.enqueue(cat2);

    let cat = shelter.dequeue('cat');

    expect(cat.name).toBe('Sassy');
    expect(shelter.cats.count).toBe(1);
    expect(shelter.allAnimals.count).toBe(1);

  });

  it('should be able to dequeue all cats', () => {
    let shelter = new AnimalShelter;
    let cat1 = new Cat('Sassy');
    let cat2 = new Cat('Crookshanks');

    shelter.enqueue(cat1);
    shelter.enqueue(cat2);

    shelter.dequeue('cat');
    shelter.dequeue('cat');

    expect(shelter.cats.count).toBe(0);
    expect(shelter.allAnimals.count).toBe(0);

  });

  it('should be able to instantiate an empty animal shelter', () => {
    let shelter = new AnimalShelter;

    expect(shelter.dogs).toBeTruthy();
    expect(shelter.cats).toBeTruthy();
    expect(shelter.dogs.count).toBe(0);
    expect(shelter.cats.count).toBe(0);

  });

  it('should be able to queue dogs and cats into the same shelter', () => {
    let shelter = new AnimalShelter;

    let cat1 = new Cat('Sassy');
    let dog1 = new Dog('Beethoven');
    let cat2 = new Cat('Crookshanks');
    let dog2 = new Dog('Buddy');

    shelter.enqueue(cat1);
    shelter.enqueue(dog1);
    shelter.enqueue(cat2);
    shelter.enqueue(dog2);

    expect(shelter.cats.count).toBe(2);
    expect(shelter.dogs.count).toBe(2);

  });

  it('should throw an exception if the animal to enqueue is not a cat or a dog', () => {

    let shelter = new AnimalShelter;

    let animal = new Animal('Nemo');

    expect(() => {shelter.enqueue(animal);}).toThrowError('sorry, only dogs or cats');

  });

  it('should throw an exception if the animal type to dequeue is not \'cat\' or \'dog\'', () => {

    let shelter = new AnimalShelter;

    let cat1 = new Cat('Sassy');
    let dog1 = new Dog('Beethoven');

    shelter.enqueue(cat1);
    shelter.enqueue(dog1);

    expect(() => {shelter.dequeue('fish');}).toThrowError('AnimalShelter only has Animals of type \'dog\' and \'cat\'');

  });

  it('should be able to dequeue the oldest animal without an animal type given when a cat is the oldest', () => {
    let shelter = new AnimalShelter;

    let cat1 = new Cat('Sassy');
    let dog1 = new Dog('Beethoven');
    let cat2 = new Cat('Crookshanks');
    let dog2 = new Dog('Buddy');

    shelter.enqueue(cat1);
    shelter.enqueue(dog1);
    shelter.enqueue(cat2);
    shelter.enqueue(dog2);

    let oldest = shelter.dequeue();

    expect(oldest.name).toBe('Sassy');
    expect(shelter.cats.count).toBe(1);
    expect(shelter.dogs.count).toBe(2);
  });

  it('should be able to dequeue the oldest animal without an animal type given when a dog is the oldest', () => {
    let shelter = new AnimalShelter;

    let dog1 = new Dog('Beethoven');
    let cat1 = new Cat('Sassy');
    let cat2 = new Cat('Crookshanks');
    let dog2 = new Dog('Buddy');

    shelter.enqueue(dog1);
    shelter.enqueue(cat1);
    shelter.enqueue(cat2);
    shelter.enqueue(dog2);

    let oldest = shelter.dequeue();

    expect(oldest.name).toBe('Beethoven');
    expect(shelter.cats.count).toBe(2);
    expect(shelter.dogs.count).toBe(1);
  });


});
