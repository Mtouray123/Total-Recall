// Reference Types
// const colors = ["red", "blue", "white"]

// const copyOfColors = colors.slice(0)

// copyOfColors.push("purple");
// Same output
// console.log(colors);
// console.log(copyOfColors);





// Objects

// const car = {
//     color: "Blue",
//     hp: 4000,
//     year: 1989
// };

// // const user = {
//     username: "user1",
//     id: 34,
//     isAdmin: true,
//     address: {
//         street: "123 Main St",
//         apt: 122,
//         state: "NY",
//         zipcode: 10033
//     },
    
// }

// // console.log(user);
// user.isAdmin = false;

// if (user.isAdmin || user.age > 18) {
//     // console.log("Hello Admin");
// } else {
//     // console.log("Hello Guest");}

// console.log(car);
// console.log(car.year)
// console.log(user.id);
// console.log(user.isAdmin);
// console.log(user.address.state);
// console.log(user.address.zipcode);
// console.log(user.hobbies);
// console.log(user.hobbies[1])

// const house = {};

// house.rooms = 4;
// house.hasPool = true;

// console.log(house);


// const adventurer = {
//     name:"Timothy",
//     hitPoints: 10,
//     belongings : ["sword", "potion", "Tums"]
// }

// for (let i = 0; i < adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i]);
// }

// for (item of adventurer.belongings) {
//     // console.log(items)
// }

// for (prop in adventurer) {
//     console.log(prop);
// }

// const propName = "points"
// console.log("hitPoints" in adventurer);

// adventurer.health = 1000;

// adventurer.sayHi = function() {
//     console.log("Hi there!");
// }

// adventurer.isHungry = true;

// // deletes a property
// delete adventurer.isHungry;

// adventurer["companion"] = {
//     name: "Velma",
//     type: "Bat"
// }

// console.log(adventurer);
// adventurer.sayHi()
// adventurer.companion.sayHi();

const movies = {
    { title: "Tokyo Story", minutes: 198 };
    { title: "Paul Blart: Mall Cop", minutes: 199};
    { title: "L'Avventura", minutes: 190};
};

// console.log(movies);
// console.log(movies[i].title);


for (let i = 0; i < movies.length; i++) {
    // console.log(movies[i].title);
}

const todos = {
    {
        userId: 1,
        id: 1,
        title: "delectus aut autom",
        completed: true,
    }
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
    },
};

// console.log(todos[0].completed)





const player = {
    name: "Josh",
    health: 1000,
    power: 500,
    stamina: 300,
    sayHi: function() {
        console.log("Hello" + this.playstation);
    }
}