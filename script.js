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
    setAge(age){
        this.age = age;
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
        this.weight-=1;
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

//Create a Story with your Person class

const timmy = new Person('Timmy');
timmy.setAge(5);

for(let i = 1; i <= 5; i++){
    timmy.eat();
}
for(let i = 1; i <= 5; i++){
    timmy.exercise();
}

timmy.setAge(9);

const hamster = new Hamster('Timmy', 'Gus', 50);

timmy.buyHamster(hamster);

timmy.setAge(15);

for(let i = 1; i <= 2; i++){
    timmy.eat();
}

for(let i = 1; i <= 2; i++){
    timmy.exercise();
}

//Chef Make Dinners

class Dinner{
    constructor(appetizer,entree,dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}
class Chef{

    makeDinner(appetizer,entree,dessert) {
        const newDinner = new Dinner(appetizer,entree,dessert);
        let dinners = [];
        dinners.push(newDinner);
        console.log(dinners);
        //'aded Smashed Brussels Sprouts', 'Lasagna Soup', 'Chocolate Cookie Skillet '
    }
}

const chef = new Chef();
chef.makeDinner('aded Smashed Brussels Sprouts', 'Lasagna Soup', 'Chocolate Cookie Skillet ');
chef.makeDinner('Pure Abundance Cashew Cheese', 'Schar Ciabatta Rolls', 'Chebe Focaccia Bread');
chef.makeDinner('Zest Basil Pesto', 'Imagine Foods Sweet Potato Soup', 'Boulder Organic! Garden Minestrone Soup');