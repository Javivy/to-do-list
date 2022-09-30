const task = document.querySelectorAll('.task');

const todos = JSON.parse(localStorage.getItem('todo-list')) || [];

const deleteTask = () => {
  task.forEach((t) => {
    t.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete') || e.target.classList.contains('delete-icon')) {
        todos.splice(t.id, 1);
        localStorage.setItem('todo-list', JSON.stringify(todos));
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      }
    });
  });
  todos.forEach((task) => {
    if (task.index !== 0) {
      task.index -= 1;
    }
  });
};

export default deleteTask;