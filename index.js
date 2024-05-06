const task = document.querySelector(".input-task");
const btnAdd = document.querySelector("#btn-add");
const containerTasks = document.querySelector(".main__tasks-container");

function addTask() {
  if (task.value == "") {
    alert("Faltan campos por completar");
  } else {
    const taskValue = task.value;
    const containerTask = document.createElement("div");
    containerTask.classList.add("main__task-container");
    const textTask = document.createElement("p");
    textTask.classList.add("main__text-task");
    textTask.textContent = taskValue;
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btns");
    btnDelete.textContent = "Eliminar";

    containerTasks.appendChild(containerTask);
    containerTask.appendChild(textTask);
    containerTask.appendChild(btnDelete);
    addCorrect();
    textTask.onclick = () => {
      taskComplete(textTask);
    };
    btnDelete.addEventListener("click", () => {
      deleteTask(containerTask, textTask, btnDelete);
    });
  }
}
function taskComplete(element) {
  if (element != "") {
    element.classList.toggle("task-complete");
  }
}
function addCorrect() {
  alert("Tarea agregada con éxito");
  task.value = "";
}
function deleteTask(div, p, button) {
  div.remove();
  p.remove();
  button.remove();
}

task.onkeydown = (event) => {
    if(event.key === "Enter"){
        event.preventDefault()
        addTask()
    }
};
btnAdd.addEventListener("click", () => {
  addTask();
});
