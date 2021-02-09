const $inputTodo = document.querySelector('.input-todo');
const $add = document.querySelector('.add');
const $todos = document.querySelector('.todos');

$add.onclick = () => {
  const value = $inputTodo.value;
  // console.log(value);

  if (!value) return;

  $todos.innerHTML += `<li>${value}</li>`
  $inputTodo.value = '';
  $inputTodo.focus();
};

// 엔터 키를 눌렀을 때 value 값이 li 요소로 추가
$inputTodo.onkeyup = e => {
  // 이벤트 객체를 브라우저가 만드는데, 이 이벤트 객체는 이벤트 핸들러의 첫번째 인수로 준다.
  // 이벤트 객체를 볼 것이므로, 인수를 지정했다.

  // key 값이 enter가 아니면 아무 동작도 하지 않는다.
  if (e.key !== 'Enter') return;

  // key 값이 enter인 경우 아래 동작을 실행한다. 
  const value = $inputTodo.value;

  if (!value) return;

  console.log(e.key);
  $todos.innerHTML += `<li>${value}</li>`
  $inputTodo.value = '';
  $inputTodo.focus();
};