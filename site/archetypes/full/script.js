const MAIN = document.querySelector('main'); // recommended

const div = document.createElement('p');
div.className = 'javascript'
div.appendChild(document.createTextNode('Inserted via JavaScript!'));
MAIN.appendChild(div);
