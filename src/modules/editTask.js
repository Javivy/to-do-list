const task = document.querySelectorAll('.task');
const taskInput = document.getElementById('task');

const todos = JSON.parse(localStorage.getItem('todo-list')) || [];

const editTask = () => {
  task.forEach((t) => {
    t.addEventListener('click', (e) => {
      if (e.target.classList.contains('edit') || e.target.classList.contains('edit-icon')) {
        taskInput.value = todos[t.id].description;
      }
    });
  });
};

export default editTask;