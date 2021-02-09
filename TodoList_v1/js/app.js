const $form = document.querySelector('form');
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

$form.onsubmit = e => {
  e.preventDefault();
  addTodo();
};

// $todos.onchange = ({ target }) => {
//   console.log(target.nextElementSibling);
//   target.nextElementSibling.style.textDecoration = target.checked ? 'line-through' : 'none';
// };

$todos.onclick = e => {
  if (!e.target.classList.contains('remove')) return;
  // console.log(e.target);
  e.target.parentNode.remove();
};