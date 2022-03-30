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
    newLi.draggable = 'true';
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


// Drag to trash

/* Events triggered on the drag target */

document.addEventListener("dragstart", function(event) {
    // Change the drgged item's ID to Deleting
    event.target.id = "Deleting";
    
    // Change the opacity of the draggable element
    event.target.style.opacity = "0.4";
});
  
/* Events triggered on the drop target / bin area */
  
// When the draggable element enters the droptarget / bin area, change the bin area div's border style
document.addEventListener("dragenter", function(event) {
    if ( event.target.className == "droptarget" ) {
      event.target.style.border = "3px dotted red";
    }
});
  
// By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
document.addEventListener("dragover", function(event) {
    event.preventDefault();
});
  
// When the draggable element leaves the droptarget/bin area, reset the bin area div's border style
document.addEventListener("dragleave", function(event) {
    if ( event.target.className == "droptarget" ) {
      event.target.style.border = "";
    }
});
  
//On drop - Prevent the browser default handling of the data (default is open as link on drop)
//Reset the color of the bin area div's border 
//If over the bin area, delete item originally dragged /  ID = "deleting", else reset ID to blank
document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
      event.target.style.border = "";
      let deleted = document.getElementById("Deleting");
      todolist.removeChild(deleted);
    } else {
        document.getElementById("Deleting").style.opacity = "1";
        document.getElementById("Deleting").id = '';
    
    }
});


