/* eslint-disable no-use-before-define */
let button = document.getElementById('enter');
let uinput = document.getElementById('userinput');
let ul = document.querySelector('ul');
let li = document.getElementsByTagName('li');

// for (let i = 0; i < ul.children.length; i++) {
//   li[i].addEventListener('click', toggleLine);
// }

// for (let i = 0; i < ul.children.length; i++) {
//   let newBtn = document.createElement('button');
//   newBtn.appendChild(document.createTextNode('Delete'));
//   ul.children[i].appendChild(newBtn).addEventListener('click', re);
// }
function toggleLine() {
  this.classList.toggle('done');
}
function re() {
  this.parentElement.remove();
}

function inputLength() {
  return uinput.value.length;
}

function userValue() {
  let newLi = document.createElement('li');
  newLi.appendChild(document.createTextNode(uinput.value));
  ul.appendChild(newLi);
  uinput.value = '';
  newLi.addEventListener('click', toggleLine);
  let delBtn = document.createElement('button');
  delBtn.appendChild(document.createTextNode('Del'));
  newLi.appendChild(delBtn);
  delBtn.addEventListener('click', re);
}

function createElement() {
  userValue();
}

function addAfterClick() {
  if (inputLength() > 0) {
    createElement();
  }
}

function addAfterPress(e) {
  if (inputLength() > 0 && e.key === 'Enter') {
    createElement();
  }
}

button.addEventListener('click', addAfterClick);
uinput.addEventListener('keypress', addAfterPress);
