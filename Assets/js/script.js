// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const toDos = document.getElementById("todo-cards");
const titleInput = document.getElementById("tasktitle");
const descriptionInput = document.getElementById("taskdescription");
const dateInput = document.getElementById("datepicker");

const submitForm = document.querySelector('#adding');
let tasks =[];

//created a modal
$('#formModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var modal = $(this);
    $('.btn-close').modal('hide')

  })
  
  $( function() {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
  } );

// TODO: add another class for `custom-card-header`
    



// Todo: create a function to generate a unique task id
function generateTaskId() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  
  



// Todo: create a function to create a task card

  const inputData = function (title, description,date) {
    const cardDiv = $('<div>');
    cardDiv.addClass('card text-white bg-danger mb-3');
    cardDiv.css('max-width', '18rem');

    const cardEl = $('<div>');
    cardEl.appendTo(cardDiv);
    
    const cardName = $('<div>')
        .addClass('card-header')
        .text(title);
      cardName.appendTo(cardEl);
    
      const cardBodyEl = $('<div>');
      cardBodyEl.addClass('card-body');
      cardBodyEl.appendTo(cardEl);
    
      const cardDescription = $('<h5>')
      .addClass('card-title')
      .text(description);
      cardDescription.appendTo(cardBodyEl);

      const dateEl = $('<p>')
        .addClass('card-text')
        .text(date);
      dateEl.appendTo(cardBodyEl);
   
      const delBtn  = $('<button>')
      .addClass('btn btn-primary delete-btn')
      .text('Delete')
      delBtn.appendTo(cardBodyEl)

      .click(function() {
        $(this).closest('.card').remove();
    });

      $('#todo-cards').append(cardDiv);
    };



// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();
  
    const task = {
    title: titleInput.value,
    description: descriptionInput.value,
    date: dateInput.value,
    };


    tasks.push(task);
    generateTaskId();

    inputData(task.title, task.description, task.date);
   // Reset form inputs
   titleInput.value = '';
   descriptionInput.value = '';
   dateInput.value = '';
  };
  
  submitForm.addEventListener('submit', handleAddTask);

  console.log(tasks);

  // Todo: create a function to handle deleting a task
  //function handleDeleteTask(event){

$(document).ready(function() {
  $('.delete-btn').on('click', function() {
      // Find the parent card element and remove it
      $(this).closest(cardDiv).remove();
  });
});


// Todo: create a function to handle dropping a task into a new status lane
//function handleDrop(event, ui) {
  // added a clear storage button
  document.addEventListener('DOMContentLoaded', function() {
  const clearButton = document.getElementById('clear');
  clearButton.addEventListener('click', function() {
    localStorage.clear();
});
});


// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
