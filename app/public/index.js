'use strict';
const API = 'http://localhost:3001/api';
const todoContainer = document.getElementById('todo');
const todoList = document.createElement('ul');
todoList.id = 'todo-items';
todoContainer.appendChild(todoList);

// Create loading spinner
const spinner = document.getElementById('todo-spinner');

function loading(onOrOff) {
  switch(onOrOff) {
    case 'on':
    spinner.classList.remove('hidden');
    break;
    case 'off':
    spinner.classList.add('hidden');
    break;
    default:
      break;
};
}

// GET TASKS

function getTodoItems() {
  loading('on');
fetch(`${API}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    data.forEach(todo => {
      let task = document.createElement('li');
      task.innerHTML = `${todo.list_item}`;
      todoList.appendChild(task);
      loading('off');
    })
  })
.catch(error => {
  console.log(error);
});
}

const addTodoInput = document.getElementById('add-todo-input');
const addTodoSubmit = document.getElementById('add-todo-submit');

// ADD TASK
addTodoSubmit.addEventListener('click', (event) => {
  
  event.preventDefault();
  let task = addTodoInput.value;
  fetch(`${API}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify({ list_item: task })
  })
  .then(res => res.json())
  .then(data => {
    res.status(200);
  })
  .catch(err => {
    console.log(err);
  })
});





getTodoItems();