const inputBox = document.getElementById("input-box");
const addButton = document.querySelector(".btn");
const list = document.getElementById("list");

addButton.addEventListener("click", addTask);

function addTask() {
    if (inputBox.value === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskText = document.createElement("span");
    taskText.textContent = inputBox.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DLT";

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    list.appendChild(li);
    inputBox.value = "";
}

list.addEventListener("click", function (e) {
    if (e.target.type === "checkbox") {
        e.target.nextElementSibling.classList.toggle("checked");
    }

    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
});
