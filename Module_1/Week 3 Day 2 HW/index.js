// class Cat {
//     legs = 4;
//     heads = 2;
//     ears = 2;
//     tails = 1;
//     lives = 9;
//     damage = 1;

//     constructor (name, color, weight) {
//         this.name = name;
//         this.color = color;
//         this.weight = weight;
//     }

//     jump() {
//         console.log(`${this.name} is jumping`);
//     }

//     scratch() {
//         console.log(`${this.name} is scratching`);
//     }

//     takeDamage(damageLevel) {
//         this.lives -= damageLevel
//         console.log(`${this.name} now had ${this.lives} lives`);
//     }
// }

// const tiger = new Cat("tiger", "orange", "600 lbs");
// const lion = new Cat("lion", "yellow", "450 lbs");
// console.log(tiger);
// console.log(lion);


// Pirate
class Pirate {
    legs = 1;
    arms = 1;
    eyes = 1;
    gold = 1000000;
    
    constructor(name, hat, weapon) {
        this.name = name;
        this.hat = hat;
        this.weapon = weapon;
    }
    
    raid() {
        console.log(`${this.name} is raiding your ship`)
    }
}