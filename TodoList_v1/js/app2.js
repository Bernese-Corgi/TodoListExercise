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
      .map(todo => `<li id="${todo.id}">
  <input type="checkbox" ${todo.completed ? 'checked' : ''} />
  <span>${todo.content}</span>
  <button class="remove">x</button> 
</li>`).join('');
};