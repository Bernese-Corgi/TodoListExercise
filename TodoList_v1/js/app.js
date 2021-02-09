const $inputTodo = document.querySelector('.input-todo');
const $add = document.querySelector('.add');
const $todos = document.querySelector('.todos');

const addTodo = () => {

  const value = $inputTodo.value;
  if (!value) return;

  // innerHTML의 대체
  const $li = document.createElement('li');
  const textNode = document.createTextNode(value);

  // remove 버튼과 텍스트
  const $span = document.createElement('span');
  const $remove = document.createElement('button');

  $span.textContent = value;
  $remove.classList.add('remove');
  $remove.textContent = 'x';

  $li.appendChild(textNode);
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