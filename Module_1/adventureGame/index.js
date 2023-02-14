// Declare a new class
class Player {
    legs = 2;
    arms = 2;
    eyes = 2;
    #hair // creates a private prop
    health = 500;
    damage = 100;

    constructor(name, age, hair) {
        this.name = name;
        this.age = age;
        this.#hair = hair;
        this.lovesPizza = true;
    }

    // instance method
    greet(otherCharacter = "friend") {
        console.log(`Hello ${otherCharacter}`);
    }

    attack() {
        console.log(`${this.name} is attacking`);
    }

    takeDamage(damageLevel) {
        this.health -= damageLevel;
        console.log(`${this.name} now has a health level of: ${this.health}`);
    }

    // Setter method
    setHair(newHairColor) {
        this.#hair = newHairColor
    }

    // Getter method
    getHair() {
        console.log(this.#hair);
    }
}


const mario = new Player("Mario", 32, "black");
const luigi = new Player("Luigi", 30, "Purple");
console.log(mario);

mario.setHair("red");
mario.getHair();


// mario.greet("Luigi");
// luigi.greet("Mario");
// // this is the only way to call the instance

// mario.attack();
// luigi.attack();

// console.log(mario instanceof Player);

// access a private prop
console.log(mario.hair);

// create a new prop (hair) which is not equal to #hair
// mario.hair = "yellow";

// console.log(mario.hair);

// update a prop using dot notation
// console.log(mario.hair)

// *Friend Class
class Friend extends Player {
    constructor(name, age, hair, ...skills) {
        super(name, age, hair); // send the values to the parent class
        this.skills = skills; // new array of skills
    }
    
    fly() {
        console.log(`${this.name} is flying...`);
    }

    attack() {
        console.log("Fireball!!!!");
    }

    doubleAttack() {
        super.attack();
        this.attack();
    }
}

// *Enemy Class
class Enemy extends Player {

}

const toad = new Friend("Toad", 18, "mushroom", "builder", "jumper", "runner");
const bowser = new Enemy("Bowser", 38, null);

console.log(mario);
console.log(luigi);
console.log(toad);
toad.doubleAttack()
console.log(bowser);
// toad.fly()
// mario.attack();
// toad.attack()

const randomNum = Math.floor(Math.random()*2)
console.log(randomNum);

if (randomNum < 1) {
    bowser.takeDamage(luigi.damage)
}
// method is a function living inside of a class