const $inputTodo = document.querySelector('.input-todo');
const $add = document.querySelector('.add');
const $todos = document.querySelector('.todos');

const addTodo = content => {
  $todos.innerHTML += `<li>${content}</li>`
  $inputTodo.value = '';
  $inputTodo.focus();
};

$add.onclick = () => {
  const value = $inputTodo.value;
  if (!value) return;
  addTodo(value);
};

$inputTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;

  const value = $inputTodo.value;
  if (!value) return;
  addTodo(value);
};