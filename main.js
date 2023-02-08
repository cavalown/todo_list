window.addEventListener("load", () => {
  const inputText = document.querySelector("#input-text");
  const addItem = document.querySelector(".add-btn");
  const tasks = [];

  addItem.addEventListener("click", () => {
    const newTask = inputText.value.trim()
    if (!newTask) {
      alert("Please text content!")
      return
    }
    const todos = document.querySelector(".todos");
    tasks.push(newTask);
    console.log("tasks:", tasks);
    inputText.value = "";
    todos.innerHTML += `<li class="todo">
      <input type="checkbox">
      <p class="todo-content">${newTask}</p>
      <div>
          <button type="button" class="edit-btn">EDIT</button>
          <button type="button" class="remove-btn">DELETE</button>
      </div>
  </li>`
  })

  const editItem = document.querySelector(".edit-btn")
  const removeItem = document.querySelector(".remove-btn");
  console.log('**', tasks);
})