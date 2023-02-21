
const titleEl = document.getElementById('title');
titleEl.style.backgroundColor = 'purple';
titleEl.style.padding = "15px"
titleEl.style.color = '#fff';
console.log(titleEl);

const h2 = document.querySelector('h2')
const h1 = document.querySelector('.main-title')
const h1ID = document.querySelector('#title')
const h3 = document.querySelector('h3')


console.dir(h2);
console.dir(h1);
console.dir(h1ID);
console.dir(h3)

const h2Elements = document.querySelector('h2')

console.log(h2Elements);
console.dir(h2Elements);

const p = document.querySelector('p');
p.innerText = "This is the list of values";
console.dir(p);

// Shopping List
const lis = document.querySelectorAll('li')
console.log(lis);

// for (element of lis) {
//     console.log(element);
//     if (element.innerText === "Eggs") {
//         console.log("Price is going up!");
//         break;
//     }
// }

// lis.forEach( (element, index) => console.log(element, index) )
// adds class to an element classlist

lis[0].classList.add('selected');

lis[1].classList.add('removed');

// remove a class from the classlist
lis[2].classList.add('selected');
lis[2].classList.remove('selected')

// check if the element contains the class argument
console.log( lis[0].classList.contains('selected'));

const comments = document.querySelector('#comments');
comments.classList.toggle('selected') // add the class
comments.classList.toggle('selected') // remove the class

// replace a oldClass fpr a newClass and return a boolean
console.log(comments.classList.replace('selected', 'removed'))

console.dir(comments);

for (element of lis) {
    // console.log(element);
}

lis.forEach( (element, index) => {
    // console.log(element, index)
})

// ================ Elements collections =======

// return a NodeList
const chatLis = document.querySelectorAll('#chat > li');
console.log(chatLis);

//return a HTMLCollectionList
const allLis = document.getElementsByTagName('li');
console.log(allLis);

// create a regular array from a collection of values
const arrayofLis = Array.from(allLis);
console.log(arrayofLis);


