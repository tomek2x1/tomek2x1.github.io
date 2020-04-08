const tasksList = [];
const donetaskList = [];

// This function adds information whether the task has been added or not
const isAdded = (taskInfo) => {
  const message = document.getElementById("message");
  switch (taskInfo) {
    case "":
      message.className = "message message--add-task-again";
      message.innerText = "Proszę o wprowadzenie zadania ponownie";
      break;
    case "added":
      message.className = "message message--added";
      message.innerText = "Zadanie zostało dodane poprawnie";
      break;
    case "addedBefore":
      message.className = "message message--add-task-again";
      message.innerText = "Taki task już istnieje!!!";
      break;
    case "done":
      message.className = "message message--done";
      message.innerText = "Świetnie udało Ci się wykonać zadanie";
      break;
  }
};

// A function that adds a new task to the list
const addToList = (e) => {
  e.preventDefault();
  const newTask = document.querySelector(".form__input--new-task").value;

  if (newTask === "" || newTask === " ") {
    isAdded("");
  } else if (tasksList.length === 0) {
    tasksList.push(newTask);
    isAdded("added");
  } else {
    if (tasksList.indexOf(newTask) > -1) {
      isAdded("addedBefore");
    } else {
      tasksList.push(newTask);
      isAdded("added");
    }
  }
  document.querySelector(".form__input--new-task").value = "";
  showTasks();
};

const addToListBtn = document.querySelector("input[type='submit']");
addToListBtn.addEventListener("click", addToList);

// A function that creates a list of tasks done
const doneTasks = () => {
  const listDoneTasks = document.getElementById("done-tasks");

  //   Create tag Ul
  if (listDoneTasks.children.length === 1) {
    const ul = document.createElement("ul");
    ul.classList.add("list-complited");
    listDoneTasks.appendChild(ul);
  }

  //   Create tags Li
  const ul = document.querySelector(".list-complited");
  ul.innerHTML = "";
  donetaskList.forEach((el) => {
    const li = document.createElement("li");
    li.classList.add("list__task");
    const span = document.createElement("span");
    span.classList.add("list__task-name");
    span.innerText = el;
    li.appendChild(span);
    ul.appendChild(li);

    // Added delete btn to li
    const deleteTask = document.createElement("div");
    deleteTask.classList.add("btn");
    deleteTask.classList.add("btn--delete");
    deleteTask.innerText = "x";
    deleteTask.addEventListener("click", function () {
      const taskToRemove = this.previousSibling.textContent;
      donetaskList.splice(donetaskList.indexOf(taskToRemove), 1);
      showTasks();
      doneTasks();
    });
    li.appendChild(deleteTask);
    isAdded("done");
  });
};

// A function showing all tasks
const showTasks = () => {
  const listToDo = document.getElementById("list-tasks");

  //   Create tag Ul
  if (listToDo.children.length === 1) {
    const ul = document.createElement("ul");
    ul.classList.add("list-to-do");
    listToDo.appendChild(ul);
  }

  //   Create tags Li
  const ul = document.querySelector(".list-to-do");
  ul.innerHTML = "";
  tasksList.forEach((el) => {
    const li = document.createElement("li");
    li.classList.add("list__task");
    const span = document.createElement("span");
    span.classList.add("list__task-name");
    span.innerText = el;
    li.appendChild(span);
    ul.appendChild(li);

    // Added delete btn to li
    const deleteTask = document.createElement("div");
    deleteTask.classList.add("btn");
    deleteTask.classList.add("btn--delete");
    deleteTask.innerText = "x";
    deleteTask.addEventListener("click", function () {
      const taskToRemove = this.previousSibling.textContent;
      tasksList.splice(tasksList.indexOf(taskToRemove), 1);
      showTasks();
    });
    li.appendChild(deleteTask);

    // Adding a button completed task to li
    const doneTask = document.createElement("div");
    doneTask.classList.add("btn");
    doneTask.classList.add("btn--done");
    doneTask.innerText = "ok";
    doneTask.addEventListener("click", function () {
      const taskToAddDoneList = this.parentElement.firstChild.textContent;
      donetaskList.push(taskToAddDoneList);
      tasksList.splice(tasksList.indexOf(taskToAddDoneList), 1);
      showTasks();
      doneTasks();
    });
    li.appendChild(doneTask);
  });
};

// Function searching tasks
function showLookingTasks(event) {
  event.preventDefault();

  const searchText = search.value;
  const filter = searchText.toUpperCase();
  const ul = document.getElementsByClassName("list-to-do");
  const li = ul[0].getElementsByTagName("li");
  for (let i = 0; i < li.length; i++) {
    span = li[i].getElementsByTagName("span")[0];
    const txtValue = span.textContent || span.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

const search = document.querySelector("#search-tasks");
search.addEventListener("input", showLookingTasks);
