const $inputTodo = document.querySelector('.input-todo');
const $add = document.querySelector('.add');
const $todos = document.querySelector('.todos');

const addTodo = () => {

  const value = $inputTodo.value;
  if (!value) return;

  const $li = document.createElement('li');
  // input요소로 checkbox 생성
  const $checkbox = document.createElement('input');
  // input 요소의 어트리뷰트를 체크박스로 지정
  $checkbox.setAttribute('type', 'checkbox');
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