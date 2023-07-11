//Hamster

class Hamster{
    constructor(owner,name,price){
        this.owner = owner;
        this.name = name;
        this.price = price;
    }
    wheelRun(){
        console.log("squeak squeak");
    }
    eatFood(){
        console.log("nibble nibble");
    }
    getPrice(){
        console.log(this.price);
    }
    getPrice(){
        return this.price;
    }

}

const hamster = new Hamster('perry', 'lu', 67);

//Person

class Person{
    constructor(name){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
        
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight;
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
    eat(){
        this.weight+=1;
        this.mood+=1;
    }
    exercise(){
        this.weight-1;
    }
    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood++;
        this.bankAccount+=10;
    }
    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood+=10;
        this.bankAccount-=(hamster.getPrice());
    }
}

