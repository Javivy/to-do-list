import check from './check.js';

const tasksList = document.querySelector('.tasks-list');

const displayTask = (obj) => {
  const { description, index } = obj;

  const task = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  const taskDescription = document.createElement('p');
  const settings = document.createElement('div');
  const menuVerticalIcon = document.createElement('i');
  const taskMenu = document.createElement('ul');
  const optionOne = document.createElement('li');
  const editIcon = document.createElement('i');
  const optionTwo = document.createElement('li');
  const deleteIcon = document.createElement('i');

  task.classList.add('task', `task-${index}`);
  checkbox.classList.add('checkbox-input');
  settings.classList.add('settings');
  menuVerticalIcon.classList.add('fa-solid', 'fa-ellipsis-vertical', 'settings');
  taskMenu.classList.add('task-menu', 'task-menu-visible');
  editIcon.classList.add('fa-solid', 'fa-pen');
  deleteIcon.classList.add('fa-solid', 'fa-trash');
  optionOne.classList.add('edit');
  optionTwo.classList.add('delete');

  checkbox.id = `${index}`;

  taskDescription.textContent = description;
  optionOne.textContent = 'Edit';
  optionTwo.textContent = 'Delete';

  checkbox.type = 'checkbox';

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
