// Task 1.0
const mainEl = document.querySelector('main');

// Task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)'

// Task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
console.log(mainEl);

// Task 1.3
// mainEl.classList.add = "flex-ctr"
mainEl.classList.add('flex-ctr');
console.log(mainEl);

// Task 2.0
// const topMenuEl = document.getElementById("top-menu")
const topMenuEl = document.querySelector("#top-menu");

// Task 2.1
topMenuEl.style.height = '100%';
// topMenuEl.setAttribute('height', '100%')

// Task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
console.log(topMenuEl);

// Task 2.3
topMenuEl.classList.add('flex-around');
console.dir(topMenuEl);

// Task 3.0
// menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

// Task 3.1
menuLinks.forEach(obj => {
// Create an <a>element
const a = document.createElement('a');
// On the new element, add am href attribute with its value set to the href property of thr "link" object.
a.setAttribute('href', obj.href);
// Set the new element a content to the value of the text property of the "link" object.
a.textContent = obj.text;
// Append the new element to the topMenuEl element.
topMenuEl.appendChild(a);
});
console.log(menuLinks);

console.log(topMenuEl);
console.log(mainEl);
console.log(mainEl);

// Task 4.0
const subMenuE1 = document.getElementById('sub-menu')

// Task 4.1 
subMenuE1.style.height = "100%";

// Task 4.2
subMenuE1.style.backgroundColor = 'var(--sub-menu-bg)';

// Task 4.3
subMenuE1.classList.add('flex-around');

// Task 4.4
subMenuE1.style.position = 'absolute';

// Task 4.5
// subMenuE1.style.top = '0'

// Task 5.1
const topMenuLinks = document.querySelectorAll("#top-menu > a");
console.dir(topMenuLinks);
showingSubMenu = false;

// Task 5.2
topMenuEl.addEventListener('click', (e) => { 
    e.preventDefault
    if(e.target.tagName !== "A") {
        return
    }
    console.log(e.target.textContent)
});

// Task 5.3

