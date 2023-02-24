

// get the button
const button = document.querySelector('button');
const removeEvent = document.getElementById('remove')

// add the an event listener
button.addEventListener('click', function(event) { 
    const li = document.createElement('li')
    const input = document.querySelector('input');
    li.textContent = input.value

    document.querySelector('ul').appendChild(li)
    // or const ul = document.querySelector('ul')
    // ul.appendChild(li) 
    
    
    input.value = '';
    
    console.log(li);
    console.dir(input);
    console.dir()
   
});

button.addEventListener('click', sayHello)

function sayHello() {
    console.log('Fetching data from database');
};

removeEvent.addEventListener('click', function() {
    button.removeEventListener('click', sayHello)
});

// Event Bubbling
const ul = document.querySelector('ul');
const body = document.querySelector('body');

ul.addEventListener('click', fucntion (e) {
    console.log('From UL || Event on: ', e.target)
});

body.addEventListener('click', function (e) {
    console.log('From Body || Event on: ', e.target)

});
