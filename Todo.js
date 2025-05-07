// Function to add a TODO
function addTodo() {
    const input = document.getElementById("todoInput");
    const todoText = input.value.trim();
  
    if (todoText === "") {
      alert("Please enter a TODO");
      return;
    }
  
    const li = document.createElement("li");
  
    li.innerHTML = `
      <span class="task-text">${todoText}</span>
      <div class="action-buttons">
        <button class="editBtn" onclick="editTodo(this)">Edit</button>
        <button class="deleteBtn" onclick="deleteTodo(this)">Delete</button>
      </div>
    `;
  
    document.getElementById("todoList").appendChild(li);
    input.value = "";
  }
  
  // Function to edit a TODO
  function editTodo(btn) {
    const li = btn.parentElement.parentElement;
    const currentText = li.querySelector(".task-text").textContent.trim();
    const newTask = prompt("Edit TODO:", currentText);
  
    if (newTask !== null && newTask.trim() !== "") {
      li.querySelector(".task-text").textContent = newTask;
    }
  }
  
  // Function to delete a TODO
  function deleteTodo(btn) {
    const li = btn.parentElement.parentElement;
    if (confirm("Are you sure you want to delete this task?")) {
      li.remove();
    }
  }
  