//defining the class with constructor and method

class Animal{
    constructor(name,sound){
        this.name = name;
        this.sound = sound;
    }
    makeSound(){
        console.log(`${this.name} says ${this.sound}`);

    }


}
const dog = new Animal("Dog","woof");
dog.makeSound();