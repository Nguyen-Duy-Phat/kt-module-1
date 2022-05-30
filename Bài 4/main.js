class Animal {
    constructor(name,weight) {
        this.name = name;
        this.weight = weight;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    setName(newName){
        this.name = newName;
    }
    setWeight(newWeight){
        this.weight = newWeight;
    }
    toString(){
        return `Name: ${this.name} , Weight: ${this.weight}`;
    }
}
let objAnimal1 = new Animal("Elephant",45.6);
console.log(objAnimal1.toString());
let objAnimal2 = new Animal("Wolf",100);
objAnimal2.setName("Mouse");
console.log(objAnimal2);