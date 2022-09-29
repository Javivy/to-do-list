import './styles.css';

const tasksList = document.querySelector('.tasks-list');

const tasksObj = [
  {
    description: 'Renew my gym membership',
    completed: false,
    index: 1,
  },
  {
    description: 'Complete the project',
    completed: false,
    index: 2,
  },
];

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
  menuVerticalIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');
  taskMenu.classList.add('task-menu');
  editIcon.classList.add('fa-solid', 'fa-pen');
  deleteIcon.classList.add('fa-solid', 'fa-trash');

  taskDescription.textContent = description;

  checkbox.type = 'checkbox';

  label.append(checkbox, taskDescription);
  optionOne.append(editIcon);
  optionTwo.append(deleteIcon);
  taskMenu.append(optionOne, optionTwo);
  settings.append(menuVerticalIcon, taskMenu);
  task.append(label, settings);
  tasksList.append(task);
};

tasksObj.forEach((i) => {
  displayTask(i);
});
