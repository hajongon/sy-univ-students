// ============================================
// Todo List Live Coding Guide
// ============================================
//
// 이 파일은 "강의용 진행 스크립트"입니다.
// 실제 답은 solution.js에 따로 두고,
// 여기서는 라이브코딩하면서 한 줄씩 채워 넣기 쉽게
// 설명을 충분히 남겨둡니다.
//
// 목표 기능
// 1. input에 입력한 할 일을 추가한다.
// 2. 완료 버튼을 누르면 줄이 그어지게 만든다.
// 3. 삭제 버튼을 누르면 해당 항목을 지운다.
// 4. 남은 할 일 개수를 표시한다.
//
// 진행 팁
// - 배열 상태 관리 없이 DOM만 바로 다룹니다.
// - "할 일 한 개를 만드는 함수" 하나만 만들면 됩니다.
// - 처음 접하는 학생 기준으로 createElement와 addEventListener만 사용합니다.

// --------------------------------------------
// 1. 필요한 DOM 요소를 먼저 선택한다.
// --------------------------------------------
//
// querySelector를 사용해서 아래 3가지를 가져오면 됩니다.
// - 폼
// - 입력창
// - 목록이 들어갈 ul
// - 남은 할 일 개수를 보여줄 strong
//
// 예시:
// const todoForm = document.querySelector("#todo-form");
//
// 왜 먼저 선택할까?
// JavaScript가 HTML 요소를 바꾸려면,
// 우선 "어떤 요소를 바꿀지" 알아야 하기 때문입니다.

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const summaryCount = document.querySelector(".todo-summary strong");

// --------------------------------------------
// 2. 남은 할 일 개수를 다시 세는 함수를 만든다.
// --------------------------------------------
//
// 지금 화면에 있는 할 일들 중에서
// 완료되지 않은 항목만 세어서 숫자를 바꿔주면 됩니다.
//
// 순서
// 1. .todo-item을 모두 찾는다.
// 2. 그중에서 .done 클래스가 없는 항목만 센다.
// 3. strong 안의 글자를 바꾼다.

function updateSummary() {
  // TODO: 모든 todo-item 가져오기

  // TODO: 남은 개수를 저장할 변수 만들기

  // TODO: 반복문으로 done이 없는 항목만 세기

  // TODO: strong 안의 글자를 "숫자개" 형태로 넣기
}

// --------------------------------------------
// 3. 할 일 한 개를 만드는 함수를 만든다.
// --------------------------------------------
//
// 새 할 일을 추가할 때마다 아래 요소들이 필요합니다.
// - li
// - span
// - 완료 버튼
// - 삭제 버튼
//
// 그리고 버튼에 클릭 이벤트도 바로 연결합니다.
//
// 완료 버튼을 누르면:
// - li에 done 클래스를 붙이거나 뗍니다.
// - 버튼 글자를 완료 / 취소로 바꿉니다.
// - summary도 다시 계산합니다.
//
// 삭제 버튼을 누르면:
// - li를 화면에서 제거합니다.
// - summary도 다시 계산합니다.

function createTodoItem(todoText) {
  // TODO: li 만들기
  // TODO: li에 todo-item 클래스 넣기

  // TODO: span 만들기
  // span에 todo-text 클래스 넣기
  // span 글자를 todoText로 넣기

  // TODO: 완료 버튼 만들기
  // complete-button 클래스 넣기
  // 글자는 "완료"

  // TODO: 삭제 버튼 만들기
  // delete-button 클래스 넣기
  // 글자는 "삭제"

  // TODO: 완료 버튼 클릭 이벤트 연결하기
  // 힌트:
  // li.classList.toggle("done");
  //
  // if (li.classList.contains("done")) {
  //   completeButton.textContent = "취소";
  // } else {
  //   completeButton.textContent = "완료";
  // }
  //
  // 마지막에는 updateSummary() 호출

  // TODO: 삭제 버튼 클릭 이벤트 연결하기
  // 힌트:
  // li.remove();
  // updateSummary();

  // TODO: li 안에 span, 완료 버튼, 삭제 버튼 순서로 넣기

  // TODO: 완성된 li 반환하기
}

// --------------------------------------------
// 4. 폼 제출 이벤트를 연결한다.
// --------------------------------------------
//
// form은 submit 이벤트가 발생하면 기본적으로 새로고침됩니다.
// 우리는 새로고침 없이 JavaScript로만 처리하고 싶으므로
// event.preventDefault()가 꼭 필요합니다.
//
// 그 다음 addTodo()를 호출하면 됩니다.

todoForm.addEventListener("submit", function (event) {
  // TODO: 기본 동작 막기

  // TODO: 입력값 가져오기
  // const todoText = todoInput.value.trim();

  // TODO: 입력값이 비어 있으면 함수 종료하기

  // TODO: createTodoItem(todoText)로 새 li 만들기

  // TODO: todoList에 새 li 추가하기

  // TODO: 입력창 비우기

  // TODO: updateSummary() 실행하기
});

// --------------------------------------------
// 5. 처음부터 들어 있던 항목에도 이벤트를 붙인다.
// --------------------------------------------
//
// index.html 안에는 이미 예시 li가 3개 들어 있습니다.
// 이 항목들도 완료/삭제 버튼이 작동해야 하므로
// 페이지가 열릴 때 한 번씩 이벤트를 연결해야 합니다.
//
// 방법
// 1. 기존 .todo-item들을 모두 찾는다.
// 2. 각 항목 안에 있는 텍스트를 꺼낸다.
// 3. 새로 만든 createTodoItem 구조로 바꿔치기한다.
//
// replaceWith를 쓰면 기존 li를 새 li로 교체할 수 있습니다.

const existingItems = document.querySelectorAll(".todo-item");

for (let i = 0; i < existingItems.length; i++) {
  // TODO: 현재 li 찾기

  // TODO: 그 안의 텍스트 가져오기

  // TODO: 새 li 만들기

  // TODO: 현재 li에 done 클래스가 있었다면 새 li에도 done 클래스 넣기
  // 그리고 완료 버튼 글자를 "취소"로 바꾸기

  // TODO: 기존 li를 새 li로 교체하기
}

// --------------------------------------------
// 6. 페이지가 열리면 남은 개수를 한 번 계산한다.
// --------------------------------------------

updateSummary();
