const tasksList = document.querySelector('.tasks-list');
const taskMenu = document.querySelector('.task-menu');

const toggleClass = () => {
  tasksList.addEventListener('click', (e) => {
    const hasClass = e.target.classList.contains('settings');
    if (hasClass) {
      taskMenu.classList.toggle('task-menu-visible');
    } else {
      taskMenu.classList.add('task-menu-visible');
    }
  });
};

export default toggleClass;