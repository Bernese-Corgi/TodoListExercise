let todos = [];

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');

const fetchTodos = () => {
  // TODO: 서버로부터 todos 데이터를 취득한다. (잠정 처리)
  todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JavaScript', completed: false },
  ];
  // ?3 서버에서 가져온 데이터를 sort해서 역순으로 배치해보자 (가장 최근 todo가 가장 위에 올라오게 하기 위해서)
  // = id가 큰 값이 위로 오게 할 것
  // todos.sort((todo1, todo2) => todo2.id - todo1.id); // 이 방식은 뮤테이터이므로 불변성을 유지하지 못한다.
  todos = [...todos].sort((todo1, todo2) => todo2.id - todo1.id);

  render();
};

const render = () => {
  $todos.innerHTML =
    todos
      .map(
        ({ id, content, completed }) => `<li id="${id}">
  <input type="checkbox" ${completed ? 'checked' : ''} />
  <span>${content}</span>
  <button class="remove">×</button>
  </li>`).join('');
};

// // ?2 아이디 가져오는 함수
// // 서버에서 오는 데이터는 배열이므로, 배열의 요소인 객체 하나하나를 돌면서 객체의 프로퍼티인 id 값을 가져온다.
// // 가져온 id값 중 최대값을 가져와서 1을 더한다.
// const generateId = () => Math.max(...todos.map(todo => todo.id)) + 1;

// // ?4 새로운 할일 추가
// const addTodo = content => {
//   // 이벤트 함수는 순수함수가 되기 어렵다. 
//   // todos = [{ id: generateId(), content: $inputTodo.value, completed: false }, ...todos];
//   // 이런 함수는 순수함수가 될 수 있다.
//   // $inputTodo.value를 인수로 받자. (호출문에 작성해주면 됨)
//   // ?5 addTodo의 호출문에 $inputTodo.value 를 인수로 받고, 위치도 지정해준다.
//   todos = [{ id: generateId(), content, completed: false }, ...todos];
// };

// ?6 = ?2 + ?4 클로저를 사용해서 gerateId 함수가 addTodo에서만 참조되도록 한다
const addTodo = (() => {
  const generateId = () => Math.max(...todos.map(todo => todo.id)) + 1;

  return content => {
    todos = [{ id: generateId(), content, completed: false }, ...todos];

    // ?7 새로운 할일이 추가되면 렌더링을 다시 해줘야 하므로 렌더함수를 호출한다.
    render();
  };

})();

const removeTodo = id => {
  // todos = todos.filter(todo => todo.id !== id);
  // ?11-5 위 코드는 타입이 안맞아서 오류
  // ?11-5-1 e.target.parentNode.id의 타입은 string이고, id 값은 number이다. 타입변환 해줘야함
  todos = todos.filter(todo => todo.id !== +id);

  // ?11-4 요소가 제거되면 바로 렌더링
  render();
}

document.addEventListener('DOMContentLoaded', fetchTodos);

// ?1 form 태그 submit 함수 
document.querySelector('form').onsubmit = e => {
  e.preventDefault();
  console.log($inputTodo.value);
  // ?2 아이디 가져오는 것도 함수로 만들어보장
  // ?3 서버에서 가져올 데이터를 역순으로 나열 (최근항목이 가장 위로 오도록)

  // ?10 중복 부분 변수에 담기
  const content = $inputTodo.value;
  console.log(content);
  // ?9 input요소가 비어있으면 아무동작 안하기
  if (!content) return;

  // ?4 새로운 할일의 추가 => 이것도 함수화 시킴, ?5 addTodo 함수 호출
  addTodo(content);

  // ?8 지워주고 포커싱
  $inputTodo.value = '';
  $inputTodo.focus();
};

// ?11 remove 버튼 누르면 요소 제거 - 이벤트 위임
$todos.onclick = e => {
  // matches 함수 : . 앞의 요소가 인수로 전달된 css 선택자에 의해 특정 노드를 탐색 가능한지 확인한다.
  // ul 요소인 todos의 자식요소인 li 요소의 자식요소인 button 중 remove 클래스를 가진 요소를 선택하는 선택자가 e.target을 탐색할 수 있는가?
  // remove 클래스가 있는 버튼요소가 아니면 모두 무시하겠다.
  if (!e.target.matches('.todos > li > button.remove')) return;

  // e.target은 remove 버튼, parentNode는 li요소 전체, li요소의 id프로퍼티를 선택
  // console.log(e.target.parentNode.id);

  // // ?11-2 filter 함수로 li 요소 제거
  // // todo의 id가 e.target.parentNode.id과 일치하지 않으면 제외시킨다.
  // todos = todos.filter(todo => todo.id !== e.target.parentNode.id);
  // ?11-3 요소 제거하는 함수를 만들어서 호출한당
  // console.log(e.target.parentNode);
  removeTodo(e.target.parentNode.id);
  // ?11-5-2 타입을 11-5-1처럼 매개변수를 받으면서 변환시켜도 되고, 아래와 같이 호출문에서 타입변환시켜도 된다.
  // removeTodo(+e.target.parentNode.id);

  // !원래 여기서 서버에 보내는 코드가 있어야함 (아직 안배워서 못해)
};

// 쿼리셀렉터나 겟엘리먼트 바이 : html, css는 변경될 가능성이 매우매우 높으므로 자바스크립트 코드가 영향을 받을 수밖에 없다.
// 리액트에서는 돔요소를 개별적으로 가져오는 행위를 하지 않는다.