// 1. 
// function maxofTwoNumbers(x,y) {
//     if (x >= y) {
//         return x;
//     } else {
//         return y;
//     }

//     // or more "elegantly" using the fantastic ternary expression!
//     // return x >= y ? x : y;
// }

// console.log(maxofTwoNumbers(3,9));




//2.
// function maxOfThree(a, b, c) {
//     if ((a >= b) && (a >= c)) { 
//         return a;
//     } else if ((b >= a) && (b >= c)) {
//         return b;
//     } else {
//         return c;
//     }
// }

// console.log(maxOfThree(100,200,300));



//4. 
// function sumArray(nums) {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//       sum += nums[i];
//     }
//     return sum;
//   }
  
//   console.log(sumArray([18, 21, 26]));





//5.
// function multiply(array) {
//     let sum = 1;
//     for (let i = 0; i < array.length; i++) {
//         sum = sum * array[i];
//     }
//     return sum;
// }

// console.log(multiply([2, 9, 8]));



//7.
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }
    return newString;
}

const string = prompt('Enter a string:');
const result = reverseString(string);
console.log(result);