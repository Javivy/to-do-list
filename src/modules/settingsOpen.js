const task = document.querySelectorAll('.task');
const taskMenu = document.querySelectorAll('.task-menu');

const toggleClass = () => {
  task.forEach((t) => {
    t.addEventListener('click', (e) => {
      if (e.target.classList.contains('settings')) {
        taskMenu[t.id].classList.toggle('task-menu-visible');
      } else {
        taskMenu[t.id].classList.add('task-menu-visible');
      }
    });
  });

  document.body.addEventListener('click', (e) => {
    if (!e.target.classList.contains('settings')) {
      taskMenu.forEach((tm) => {
        tm.classList.add('task-menu-visible');
      });
    }
  });
};

export default toggleClass;