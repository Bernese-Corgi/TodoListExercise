const $inputTodo = document.querySelector('.input-todo');
const $add = document.querySelector('.add');
const $todos = document.querySelector('.todos');

$add.onclick = () => {
  const value = $inputTodo.value;
  // 객체 디스트럭칭 할당
  // const { value } = $inputTodo;
  if (!value) return; // value가 빈 문자열이면 아무것도 하지 않겠다.
  console.log(value);
  $todos.innerHTML += `<li>${value}</li>`
  $inputTodo.value = ''; // 이 방식으로는 지워지지 않는다. 변수에 있는 문자를 빈 문자열로 재할당했을뿐.
  $inputTodo.focus();
};