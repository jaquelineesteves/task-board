// Retrieve tasks and nextId from localStorage
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
    
  });



// Todo: create a function to generate a unique task id
function generateTaskId() {
  const taskId = nextId;
  nextId++; 
  localStorage.setItem('nextId', JSON.stringify(nextId)); 
  return taskId;
};



// Todo: create a function to create a task card

  const inputData = function (task) {
    const cardDiv = $('<div>');
    cardDiv.addClass('card text- mb-3 draggable');
    cardDiv.attr('data-task-id', task.id);
    cardDiv.css('max-width', '18rem');

    const cardEl = $('<div>');
    cardEl.appendTo(cardDiv);
    
    const cardName = $('<div>')
        .addClass('card-header')
        .text(task.title);
      cardName.appendTo(cardEl);
    
      const cardBodyEl = $('<div>');
      cardBodyEl.addClass('card-body');
      cardBodyEl.appendTo(cardEl);
    
      const cardDescription = $('<h5>')
      .addClass('card-title')
      .text(task.description);
      cardDescription.appendTo(cardBodyEl);

      const dateEl = $('<p>')
        .addClass('card-text')
        .text(task.date);
      dateEl.appendTo(cardBodyEl);
   
      const delBtn  = $('<button>')
      .addClass('btn btn-primary delete-btn')
      .text('Delete')
      .attr('data-task-id', task.id);
      delBtn.appendTo(cardBodyEl)

      .click(function() {
        $(this).closest('.card').remove();
    });

    if (task.date && task.status!== 'done') {
      const now = dayjs();
      const taskDueDate = dayjs(task.date, 'MM/DD/YYYY');

      if (now.isSame(task.date, 'day')) {
        cardDiv.addClass('bg-warning text-white');
      } else if (now.isAfter(taskDueDate)) {
        cardDiv.addClass('bg-danger text-white');
        delBtn.addClass('border-light');
      }
    };
      $('#todo-cards').append(cardDiv);
    };



// Todo: create a function to render the task list and make cards draggable

function renderTaskList() {
  const gettask = JSON.parse(localStorage.getItem('tasks'));
  if (gettask !== null){
    tasks = gettask;
 };
console.log("renderTaskList"+ tasks);

  const todoList = $('#todo-cards');
  todoList.empty();

  const inProgressList = $('#in-progress-cards');
  inProgressList.empty();

  const doneList = $('#done-cards');
  doneList.empty();

  
  for (let task of tasks) {
    if (task.status === 'to-do') {
      todoList.append(inputData(task));
    } else if (project.status === 'in-progress') {
      inProgressList.append(inputData(task));
    } else if (project.status === 'done') {
      doneList.append(inputData(task));
    }
  };

  $('.draggable').draggable({
    opacity: 0.7,
    zIndex: 100,
    helper: function (e) {
      const original = $(e.target).hasClass('ui-draggable')
        ? $(e.target)
        : $(e.target).closest('.ui-draggable');
      return original.clone().css({
        width: original.outerWidth(),
      });
    },
  });
};

// Todo: create a function to handle adding a new task

function handleAddTask(event){
  event.preventDefault();

  const task = {
      id: generateTaskId(), 
      title: titleInput.value,
      description: descriptionInput.value,
      date: dateInput.value,
      status: 'to-do'
  };

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  // Reset form inputs
  titleInput.value = '';
  descriptionInput.value = '';
  dateInput.value = '';
  console.log(tasks);
  renderTaskList();
};
  
  // Todo: create a function to handle deleting a task
  /*function handleDeleteTask(){
    const taskId = $(this).attr('data-task-id');
    const tasks = handleAddTask;
  
    tasks.forEach((task) => {
      if (task.id === taskId) {
        task.splice(task.indexOf(task), 1);
      }
    });
  

    saveProjectsToStorage(projects);
  
   
    printProjectData();
  }*/
  
// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
  const newStatus = event.target.id;
  const taskId = ui.draggable[0].dataset.taskId;
  for (let task of tasks) {
    
    if (task.id === taskId) {
    task.status = newStatus;
  }
}
// ? Save the updated projects array to localStorage (overwritting the previous one) and render the new project data to the screen.
localStorage.setItem('nextId', JSON.stringify(nextId));
renderTaskList();

};




// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
renderTaskList();
$( function() {
  $( "#datepicker" ).datepicker();
} );

$('.lane').droppable({
  accept: '.draggable',
  drop: handleDrop,
});
});


submitForm.addEventListener('submit', handleAddTask);

 //clear storage button
document.addEventListener('DOMContentLoaded', function() {
    const clearButton = document.getElementById('clear');
  
    clearButton.addEventListener('click', function() {
      localStorage.clear();
});
});