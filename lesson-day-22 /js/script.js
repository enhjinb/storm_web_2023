console.log('Lesson Day 22 - JS DOM HTML Functions');

// DOM creat element
// Hoolnii turuluudig  uusgeed tuuniig DOM-d nemeh
let h2Element = document.createElement('h2');
h2Element.innerText = 'My favourite foods';
h2Element.setAttribute('class', 'my-favourite-food');
// DOM Tree luu nemeh
let contentElement = document.getElementById('content');
contentElement.appendChild(h2Element);
// DOM attribute 
// Hoolnii turluudiin jagsaalt
let foods = ['buuz', 'huushuur', 'horhog', ];
let ulElement = document.createElement('ul');
for (let i = 0; i < foods.length, i++ ) {
    let liElement = document.createElement('li');
    liElement.innerText = foods [i];
   ulElement.appendChild(liElement)
}

contentElement.appendChild(ulElement)
// insertBefore gedeg punkts

let h4Element = document.createElement('h4');
h4Element.innerHTML = 'Minii durtai hoolnuud';
contentElement.insertBefore(h4Element, ulElement);

console.log ('Lesson Day 22 - JS DOM - HTML function');

  let clickMeButton = document.createElement('button');
  clickMeButton.innerText = 'Click Me'; 
  clickMeButton.setAttribute('style','border: 1px solid red; padding: 10px; font-size: 20px;');

 contentElement.appendChild(clickMeButton);

 function showAlert(){
    alert('hello world')
 }
clickMeButton.addEventListener('click', showAlert);