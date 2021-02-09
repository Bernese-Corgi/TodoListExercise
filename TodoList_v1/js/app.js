const $inputTodo = document.querySelector('.input-todo');
const $add = document.querySelector('.add');
const $todos = document.querySelector('.todos');

$add.onclick = () => {
  const value = $inputTodo.value;

  if (!value) return; // value가 빈 문자열이면 아무것도 하지 않겠다.
  console.log(value);
  $todos.innerHTML += `<li>${value}</li>`
  $inputTodo.value = '';
  $inputTodo.focus();
};