// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const tittleinput = document.getElementById("tasktitle");
const descriptioninput = document.getElementById("taskdescription");
var taskArray =[];
const addTaskbutton = document.querySelector('#submit');

const addtitletocard = document.querySelector('.card-header');
const addtaskdescription = document.querySelector('.card-title');
const adddate = document.querySelector('.card-text');

//created a modal
$('#formModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var recieveTask = button.data('whatever') 
    var modal = $(this)
    modal.find('.modal-title').text('Add Task')
    modal.find('.modal-body input').val(recieveTask)

  })

// Todo: create a function to generate a unique task id
function generateTaskId() {
if (taskList!== null){
  taskArray = taskList;
}
generateTaskId();
}


// Todo: create a function to create a task card

  addTaskbutton.addEventListener('click', function createTaskCard(task) {
    const createdcard = {
     title: tittleinput.value,
     description: descriptioninput.value,
    }
    taskArray.push(createdcard);
    localStorage.setItem('posts', JSON.stringify(taskArray));
  });


console.log(taskArray);
// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
