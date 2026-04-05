let todos = ["복습하기", "과제 제출하기", "점심 먹기"];

function printTodos() {
  console.log("현재 할 일 목록");

  for (let i = 0; i < todos.length; i++) {
    console.log((i + 1) + ". " + todos[i]);
  }
}

function addTodo(newTodo) {
  console.log("추가할 할 일:", newTodo);

  if (newTodo === "") {
    console.log("빈 문자열은 추가할 수 없습니다.");
    return;
  }

  todos.push(newTodo);
  console.log("추가 완료:", newTodo);
}

function removeTodo(indexNumber) {
  let realIndex = indexNumber - 1;

  if (realIndex < 0 || realIndex >= todos.length) {
    console.log("잘못된 번호입니다.");
    return;
  }

  let removedTodo = todos[realIndex];
  todos.splice(realIndex, 1);
  console.log("삭제 완료:", removedTodo);
}

function printTodoCount() {
  console.log("현재 할 일은 총 " + todos.length + "개입니다.");
}

printTodos();
printTodoCount();

addTodo("장보기");
printTodos();
printTodoCount();

removeTodo(2);
printTodos();
printTodoCount();

addTodo("");
printTodos();
printTodoCount();
