class Hamster {
    constructor(name){
      this.owner = ''
      this.name = name
      this.price = 15
    }
    wheelRun(){
      console.log('squeak squeak')
    }
    eatFood(){
      console.log('nibble nibble')
    }
    getPrice(){
      return this.price
    }
  }

  
  class Person {
    constructor(name){
      this.name = name
      this.age = 0
      this.height = 0
      this.weight = 0
      this.mood = 0
      this.hamsters = []
      this.bankAccount = 0
    }
    getName(){
      return this.name
    }
    getAge(){
      return this.age
    }
    getWeight(){
      return this.weight
    }
    greet(){
      console.log(`I am ${this.name} hello`)
    }
    eat() {
      this.weight++
      this.mood++
    }
    exercise() {
      this.weight--
    }
    ageUp(){
      this.age++
      this.height++
      this.weight++
      this.mood--
      this.bankAccount+=10
    }
    buyHamster(hamster) {
      this.hamsters.push(hamster);
      this.mood+=10
      this.bankAccount -= hamster.getPrice()
    };
  }


  // New Person Timmy

  const timmy = new Person("Timmy");
    const ageFive = () => {
    for(let i = 0; i < 5; i++){
        timmy.ageUp();
    }
};   
    const eatFive = () => {
    for(let i = 0; i < 5; i++){
        timmy.eat();
    }
}
    const workoutFive = () => {
        for(let i = 0; i < 5; i++){
            timmy.exercise();
        }
    }
    const upNine = () => {
        for(let i = 0; i < 9; i++){
            timmy.ageUp();
        }
    }

    // Hamster Gus
    const gus = new Hamster("Gus");
    gus.owner = "Timmy";
    console.log(gus);
    timmy.buyHamster(gus);
    

    // Timmy Continued   
    const upFifteen = () => {
        for(let i = 0; i < 15; i++){
            timmy.ageUp();
        }
    }
    const eatTwice = () => {
        for(let i = 0; i < 2; i++){
            timmy.eat();
        }
    }
    const workoutTwice = () => {
        for(let i = 0; i < 2; i++){
            timmy.exercise();
        }
    }

    ageFive();
    eatFive();
    workoutFive();
    upNine();
    upFifteen();
    eatTwice();
    workoutTwice();
    console.log(timmy);




// Chef Make Dinners

// class Dinner {
//     constructor(appetizer, entree, dessert) {
//         this.appetizer = appetizer;
//         this.entree = entree;
//         this.dessert = dessert;
//     }
// }

// class Chef {
//     dinners = [];

//     chefDinner(appetizer, entree, dessert) {
//         const dinner = new Dinner(appetizer, entree, dessert);
//         this.dinners.push(dinner);
//     }
// }

// const chef = new Chef();
// chef.chefDinner("Wings", "Steak", "Ice cream");
// chef.chefDinner("Breadsticks", "Pasta", "Cake");
// chef.chefDinner("Taquitos", "Chicken", "Gelatin");

// console.log(chef.dinners);