let todos = [];

const $todos = document.querySelector('.todos');

const fetchTodos = () => {
  todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JavaScript', completed: false },
  ];
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