class Ship {
    constructor(hull, firepower, accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;

    }
}
const ussAssembly = new Ship(20, 5, 0.7);
console.log(ussAssembly);

class Alien {
    constructor(hull, firepower, accuracy) {
        // logic for aliens 
        hull = Math.floor((Math.random() * (6 - 3)) + 3);
        firepower = Math.floor((Math.random() * (4 - 2)) + 2);
        accuracy = (Math.round((Math.random()*2)+6))/10
    }
}
const alien1 = new Alien();
const alien2 = new Alien();
const alien3 = new Alien();
const alien4 = new Alien();
const alien5 = new Alien();
const alien6 = new Alien();
console.log(alien1);
console.log(alien2);
console.log(alien3);
console.log(alien4);
console.log(alien5);
console.log(alien6);