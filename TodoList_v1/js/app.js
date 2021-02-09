const $inputTodo = document.querySelector('.input-todo');
const $add = document.querySelector('.add');
const $todos = document.querySelector('.todos');

const addTodo = () => {

  const value = $inputTodo.value;
  if (!value) return;

  $todos.innerHTML += `<li>${value}</li>`
  $inputTodo.value = '';
  $inputTodo.focus();
};

$add.onclick = addTodo;

$inputTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;

  addTodo();
};