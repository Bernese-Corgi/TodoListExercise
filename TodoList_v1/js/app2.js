let todos = [];

const $todos = document.querySelector('.todos');

const fetchTodos = () => {
  todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JavaScript', completed: false },
  ];

  render();
};

const render = () => {
  $todos.innerHTML =
    todos
      .map({ id, content, completed } => `<li id="${id}">
  <input type="checkbox" ${completed ? 'checked' : ''} />
  <span>${content}</span>
  <button class="remove">x</button>
  </li>`).join('');
};

애플리케이션이 구동하자마자, 서버에서 데이터를 가져오는 일을 먼저 해야한다. (= fetchTodos 함수의 일)
DOMContentLoaded 를 이용(DOMContentLoaded 이벤트는 addEventListener로만 가능)
두번쨰는 이벤트 핸들러를 주는 자리 -> 호출문으로 작성하면 안되고, 함수 이름을 써야한다
애플리케이션이 구동하자마자 fetchTodos 함수를 호출한다.
  document.addEventListener('DOMContentLoaded', fetchTodos);