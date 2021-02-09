let todos = [];

const $todos = document.querySelector('.todos');

const fetchTodos = () => {
  // TODO: 서버로부터 todos 데이터를 취득한다. (잠정 처리)
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

document.addEventListener('DOMContentLoaded', fetchTodos);