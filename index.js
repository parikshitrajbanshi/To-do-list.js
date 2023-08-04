// Selecting elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Add task function
function addTask() {
    const taskText = taskInput.value;
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.className = "task-item";
        taskItem.innerHTML = `
      ${taskText}
      <button class="delete-btn">Delete</button>
    `;
        taskList.appendChild(taskItem);
        taskInput.value = "";

        // Delete task event listener
        const deleteButton = taskItem.querySelector(".delete-btn");
        deleteButton.addEventListener("click", function () {
            taskItem.remove();
        });
    }
}

// Add task event listener
addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
1