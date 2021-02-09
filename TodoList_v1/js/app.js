const $inputTodo = document.querySelector('.input-todo');
const $add = document.querySelector('.add');
const $todos = document.querySelector('.todos');

const addTodo = () => {

  const value = $inputTodo.value;
  if (!value) return;

  const $li = document.createElement('li');
  const $checkbox = document.createElement('input');
  const $span = document.createElement('span');
  const $remove = document.createElement('button');

  // remove 버튼과 텍스트

  $checkbox.setAttribute('type', 'checkbox');
  $span.textContent = value;
  $remove.classList.add('remove');
  $remove.textContent = 'x';

  $li.appendChild($checkbox);
  $li.appendChild($span);
  $li.appendChild($remove);
  $todos.appendChild($li);

  $inputTodo.value = '';
  $inputTodo.focus();
};

$add.onclick = addTodo;

$inputTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;

  addTodo();
};