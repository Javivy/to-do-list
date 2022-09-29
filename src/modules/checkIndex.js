import { todos } from './store.js';

const checkIndex = () => {
  document.addEventListener('click', (e) => {
    const taskName = e.target.parentElement.lastElementChild;
    if (e.target.checked) {
      taskName.classList.add('checked');
      todos[e.target.id].completed = true;
      localStorage.setItem('todo-list', JSON.stringify(todos));
    } else {
      taskName.classList.remove('checked');
      todos[e.target.id].completed = false;
      localStorage.setItem('todo-list', JSON.stringify(todos));
    }
    console.log(todos);
  });
};

export default checkIndex;
