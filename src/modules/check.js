const check = (todos) => {
  const checkbox = document.getElementById(`${todos.index}`);
  const taskName = checkbox.parentElement.lastElementChild;
  if (todos.completed === true) {
    checkbox.checked = true;
    taskName.classList.add('checked');
  } else {
    checkbox.checked = false;
    taskName.classList.remove('checked');
  }
};

export default check;
