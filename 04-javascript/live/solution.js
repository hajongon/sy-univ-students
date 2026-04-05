const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const summaryCount = document.querySelector(".todo-summary strong");

function updateSummary() {
  const todoItems = document.querySelectorAll(".todo-item");
  let remainingCount = 0;

  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].classList.contains("done") === false) {
      remainingCount = remainingCount + 1;
    }
  }

  summaryCount.textContent = remainingCount + "개";
}

function createTodoItem(todoText) {
  const li = document.createElement("li");
  li.classList.add("todo-item");

  const span = document.createElement("span");
  span.classList.add("todo-text");
  span.textContent = todoText;

  const completeButton = document.createElement("button");
  completeButton.classList.add("complete-button");
  completeButton.type = "button";
  completeButton.textContent = "완료";

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.type = "button";
  deleteButton.textContent = "삭제";

  completeButton.addEventListener("click", function () {
    li.classList.toggle("done");

    if (li.classList.contains("done")) {
      completeButton.textContent = "취소";
    } else {
      completeButton.textContent = "완료";
    }

    updateSummary();
  });

  deleteButton.addEventListener("click", function () {
    li.remove();
    updateSummary();
  });

  li.appendChild(span);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  return li;
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const todoText = todoInput.value.trim();

  if (todoText === "") {
    return;
  }

  const newTodoItem = createTodoItem(todoText);
  todoList.appendChild(newTodoItem);
  todoInput.value = "";
  updateSummary();
});

const existingItems = document.querySelectorAll(".todo-item");

for (let i = 0; i < existingItems.length; i++) {
  const oldItem = existingItems[i];
  const oldText = oldItem.querySelector(".todo-text").textContent;
  const newItem = createTodoItem(oldText);

  if (oldItem.classList.contains("done")) {
    newItem.classList.add("done");
    newItem.querySelector(".complete-button").textContent = "취소";
  }

  oldItem.replaceWith(newItem);
}

updateSummary();
