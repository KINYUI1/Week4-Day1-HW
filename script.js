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

}