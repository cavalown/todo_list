window.addEventListener("load", () => {
  const inputText = document.querySelector("#input-text");
  const addItem = document.querySelector(".add-btn");
  // const tasks = [];


  function addTask() {
    const newTask = inputText.value.trim()
    if (!newTask) {
      alert("Please text content!")
      return
    }
    const todos = document.querySelector(".todos");
    const todoList = document.createElement('li')
    todoList.classList.add('todo')
    // tasks.push(newTask);
    todoList.innerHTML += `<input type="checkbox">
      <p class="todo-content">${newTask}</p>
      <div>
          <button type="button" class="edit-btn">EDIT</button>
          <button type="button" class="remove-btn">DELETE</button>
      </div>`;
    todos.appendChild(todoList);
    inputText.value = "";
  }

  // 新增task: 點擊+
  addItem.addEventListener("click", () => {
    addTask();
  })
  // 新增task: enter
  inputText.addEventListener("keypress", (event) => {
    if (event.which === 13) addTask();
  })

  // 編輯task
  // 刪除task
  // 完成task，並移至最下方。
  const editItem = document.querySelector(".edit-btn")
  const removeItem = document.querySelector(".remove-btn");
})