let inputForm = document.querySelector('#inputForm');
let textInput = document.querySelector('#textInput');
let todolist = document.querySelector('.todolist');

inputForm.addEventListener('submit', function(event){
    event.preventDefault()
    let newLi = document.createElement("li");
    newLi.innerText = textInput.value;
    todolist.appendChild(newLi);
    textInput.value = '';
})
