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

function getTodoItems() {
  loading('on');
fetch(`${API}`)
  .then(res => res.json())
  .then(data => {
    data.forEach(todo => {
      console.log(todo.list_item);
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


window.addEventListener('load', (event) => {
  getTodoItems();
});
