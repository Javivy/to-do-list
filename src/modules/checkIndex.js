import { todos } from './store.js';

const task = document.querySelectorAll('task');

const checkIndex = () => {
  task.forEach((t) => {
    t.addEventListener('click', () => {
      const checkbox = document.getElementById(`checkbox-${t.id}`);
      const taskName = checkbox.parentElement.lastElementChild;
      if (checkbox.checked === true) {
        taskName.classList.add('checked');
        todos[checkbox.id].completed = true;
        localStorage.setItem('todo-list', JSON.stringify(todos));
      } else {
        taskName.classList.remove('checked');
        todos[checkbox.id].completed = false;
        localStorage.setItem('todo-list', JSON.stringify(todos));
      }
    });
  });
};

export default checkIndex;
