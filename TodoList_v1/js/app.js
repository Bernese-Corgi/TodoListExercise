const $inputTodo = document.querySelector('.input-todo');
const $add = document.querySelector('.add');
const $todos = document.querySelector('.todos');

const addTodo = () => {

  const value = $inputTodo.value;
  if (!value) return;

  // innerHTML의 대체
  const $li = document.createElement('li');
  const textNode = document.createTextNode(value);
  $li.appendChild(textNode);
  $todos.appendChild($li);

  $inputTodo.value = '';
  $inputTodo.focus();
};

$add.onclick = addTodo;

$inputTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;

  addTodo();
};