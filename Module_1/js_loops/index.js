

// // iterator ; condition; incrementor
// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// let i = 5;

// // iterator ; condition; incrementor
// for (let i = 0; i < 10; i++) {
//     console.log("Loop");
//     console.log(i);
// }



// for (let i = 10; i >= 0; i+i) {
//     console.log(i);
// }

// for (let i = )

// for (let i = 6; i <= 60; i = i + 3) {
//     console.log(i);
// }

// for (let i = "#"; i <= "#######"; i += "#") {
//     console.log(i)
// }

// for (let i = 0; i <= 10; i++) {
//     if (i === 0) {
//         console.log(i + "is even");
//     }
//     else if (i % 2 === 0) {
//         console.log(i + "is even");
//     }
// }






// Even and Odd
// for (let i = 1; i <= 20; i++) {
    
//     if (i % 2 === 0) {
//         // console.log(i +"is Even");
    
//     } else if (i % 2 !== 0) {
//         // console.log(i + "is odd");
//     }
// }


// Prime Numbers
for (let i = 2; i <= 20; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        // console.log(j, " - " , i);
        if (i % j === 0) {
            // console.log(i + " Not a prime number");
            isPrime = false;
        }
    
    }

    if (isPrime) {
        // console.log(i + " is prime");
    }


}

// Example
for  (let i = 0; i <= 3; i++) {
    console.log(i + " Outer Loop");

    for ( let j = 0; j <= 3; j++) {
        console.log(j + " Inner Loop ");
    }
}
