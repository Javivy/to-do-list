import './styles.css';
// import tasksObj from './modules/taskObj.js';
import changeValue from './modules/store.js';
import toggleClass from './modules/settingsOpen.js';
// import checkIndex from './modules/checkIndex.js';
import deleteTask from './modules/delete.js';
import editTask from './modules/editTask.js';

const todos = JSON.parse(localStorage.getItem('todo-list')) || [];

if (todos.length !== 0) {
  // checkIndex();
  toggleClass();
  editTask();
  deleteTask();
}

changeValue();
