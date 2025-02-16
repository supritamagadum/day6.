//creating and object and adding prototype to it

function person(name,age){
    this.name = name;
    this.age = age;

}
person.prototype.greet = function (){
    console.log(`hello i am ${this.name} and my age is ${this.age}`);
    const person1 = new person("adya",20);
    const person2 = new person("motu",25);
    person1.greet();
    person2.greet();
}