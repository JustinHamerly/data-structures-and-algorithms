'use strict';

const Queue = require('./queue');
const Exception = require('./exception');

class Animal{
  constructor(name){
    this.name = name;
    this.next = null;
  }
}

class Dog extends Animal {
  constructor(name){
    super(name);
    this.type = 'dog';
  }
}

class Cat extends Animal {
  constructor(name){
    super(name);
    this.type = 'cat';
  }
}

class AnimalShelter {

  constructor(){
    this.dogs = new Queue;
    this.cats = new Queue;
    this.allAnimals = new Queue;
  }

  enqueue(animalObj){

    if(animalObj.type !== 'dog' && animalObj.type !== 'cat'){
      throw new Exception('sorry, only dogs or cats');
    }

    if(animalObj.type === 'dog'){
      this.dogs.enqueue(animalObj);
      this.allAnimals.enqueue(animalObj);
    }else{
      this.cats.enqueue(animalObj);
      this.allAnimals.enqueue(animalObj);
    }

  }

  dequeue(pref){

    if (pref !== 'dog' && pref !== 'cat' && pref){
      throw new Exception('AnimalShelter only has Animals of type \'dog\' and \'cat\'');
    }

    if (pref === 'dog'){

      let prev = null;
      let frontDog = this.allAnimals.front;
      while (frontDog.value.type !== 'dog'){
        prev = frontDog;
        frontDog = frontDog.next;
      }
      if(prev !== null){
        prev.next = frontDog.next;
        frontDog.next = null;
        return this.dogs.dequeue();
      }
      this.allAnimals.dequeue();
      return this.dogs.dequeue();

    } else if (pref === 'cat') {

      let prev = null;
      let frontCat = this.allAnimals.front;
      while (frontCat.value.type !== 'cat'){
        prev = frontCat;
        frontCat = frontCat.next;
      }
      if(prev !== null){
        prev.next = frontCat.next;
        frontCat.next = null;
        return this.cats.dequeue();
      }
      this.allAnimals.dequeue();
      return this.cats.dequeue();

    } else if (!pref) {

      let frontAnimal = this.allAnimals.front;
      if (frontAnimal.value.type === 'dog'){
        this.dogs.dequeue();
      } else {
        this.cats.dequeue();
      }

      return this.allAnimals.dequeue();

    }

  }

}

module.exports = {
  AnimalShelter,
  Animal,
  Dog,
  Cat
};
