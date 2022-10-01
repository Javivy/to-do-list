import check from './check.js';

const tasksList = document.querySelector('.tasks-list');

// const todos = JSON.parse(localStorage.getItem('todo-list'));

// function deleteFunction(id) {
//   console.log(todos);
//   console.log(id);
//   // todos = todos.splice(id, 1);
//   // localStorage.setItem('todo-list', JSON.stringify(todos));
//   // console.log(todos);
// }

const displayTask = (obj) => {
  const { description, index } = obj;

  const task = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  const taskDescription = document.createElement('input');
  const settings = document.createElement('div');
  const menuVerticalIcon = document.createElement('i');
  const taskMenu = document.createElement('ul');
  const optionOne = document.createElement('li');
  const editIcon = document.createElement('i');
  const optionTwo = document.createElement('li');
  const deleteIcon = document.createElement('i');

  task.classList.add('task');
  label.classList.add('label');
  checkbox.classList.add('checkbox-input');
  settings.classList.add('settings');
  taskDescription.classList.add('new-task-input');
  menuVerticalIcon.classList.add('fa-solid', 'fa-ellipsis-vertical', 'settings');
  taskMenu.classList.add('task-menu', 'task-menu-visible');
  editIcon.classList.add('fa-solid', 'fa-pen', 'edit-icon');
  deleteIcon.classList.add('fa-solid', 'fa-trash', 'delete-icon');
  optionOne.classList.add('edit');
  optionTwo.classList.add('delete');

  checkbox.id = `checkbox-${index}`;
  taskDescription.id = `description-${index}`;
  optionTwo.id = `${index}`;
  taskMenu.id = `${index}`;
  task.id = `${index}`;

  taskDescription.value = description;
  optionOne.textContent = 'Edit';
  optionTwo.textContent = 'Delete';

  checkbox.type = 'checkbox';

  // deleteIcon.addEventListener('click', () => {
  //   deleteFunction(index);
  // });
  // optionTwo.addEventListener('click', () => {
  //   deleteFunction(index);
  // });

  label.append(checkbox, taskDescription);
  optionOne.append(editIcon);
  optionTwo.append(deleteIcon);
  taskMenu.append(optionOne, optionTwo);
  settings.append(menuVerticalIcon, taskMenu);
  task.append(label, settings);
  tasksList.append(task);

  check(obj);
};

export default displayTask;
