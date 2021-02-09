const $form = document.querySelector('form');
const $inputTodo = document.querySelector('.input-todo');
const $add = document.querySelector('.add');
const $todos = document.querySelector('.todos');

const handler = () => {
  console.log('clicked!');
};

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

  // 각각의 remove 버튼 요소의 이벤트 핸들러 프로퍼티에 모두 함수가 달려있다.
  $remove.onclick = handler;

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
// remove 버튼이 생성된 이후에 실행되는 이벤트이므로, addTodo 함수 안에서 remove버튼을 생성하는 코드 이후에 지정해야햔다.
document.querySelectorAll('.remove').forEach($btn => {
  $btn.onclick = () => {
    console.log('clicked');
  };
});
