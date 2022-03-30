// Declare variables for DOM elements
let inputForm = document.querySelector('#inputForm');
let textInput = document.querySelector('#textInput');
let button = document.querySelector('#deleteAll');
let todolist = document.querySelector('#todolist');

//EVENT LISTENERS
inputForm.addEventListener('submit', submitHandler)

button.addEventListener('click', deleteAllHandler)

todolist.addEventListener('click', strikethrough)

//Function to append text input to the ordered list as a new li
function submitHandler(event){
    event.preventDefault();
    let newLi = document.createElement("li");
    newLi.innerText = textInput.value;
    todolist.appendChild(newLi);
    textInput.value = '';
}

//Function to replace all li's with blank if li's exist within parent list
function deleteAllHandler(event){
    //document.getElementById('todolist').innerHTML = '';
    if (todolist.hasChildNodes){
    todolist.replaceChildren();
    }
}

//Function to srtikethrough li's 
function strikethrough(event){
    if (event.target.style.textDecoration === 'line-through'){
        event.target.style.textDecoration = '';
    } else {
        event.target.style.textDecoration = 'line-through';
    } 
}






