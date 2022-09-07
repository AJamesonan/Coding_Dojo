class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log("my name is "+this.name);
    }

    showStats(){
        console.log(this.name + ": Health-"+ this.health + ", Speed-" + this.speed + ", " + "Strength-" + this.strength)
    }

    drinkSake(){
        this.health += 10;
    }
}


class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        console.log("bottoms up");
        this.drinkSake();
    }

    sayName(){
        console.log("my name is Sensei "+this.name);
    }

}

let bones = new Sensei("Bones")

bones.sayName();
bones.showStats();
bones.drinkSake();
bones.showStats();
bones.speakWisdom();
bones.showStats();