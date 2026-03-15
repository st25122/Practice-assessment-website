// Get all the "Add" buttons
const buttons = document.querySelectorAll(".add-task");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.parentElement;
    const input = card.querySelector(".task-input");
    const taskList = card.querySelector(".task-list");
    const taskText = input.value.trim();

    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;
      taskList.appendChild(li);
      input.value = ""; // Clear input
    }
  });
});