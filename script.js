const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();
  if (!taskInput.value) return;

  const task = document.createElement("li");
  task.classList.add("task");
  task.innerHTML = `
    <input type="checkbox">
    <span>${taskInput.value}</span>
    <button type="button">Delete</button>
  `;

  taskInput.value = "";
  taskList.appendChild(task);

  task.querySelector("input[type='checkbox']").addEventListener("click", toggleTaskCompleted);
  task.querySelector("button").addEventListener("click", deleteTask);
}

function toggleTaskCompleted(e) {
  const task = e.target.parentElement;
  task.querySelector("span").classList.toggle("completed");
}

function deleteTask(e) {
  const task = e.target.parentElement;
  task.remove();
}
