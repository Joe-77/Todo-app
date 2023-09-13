onerror = () => {
  return true;
};

var light = document.getElementById("light"),
  night = document.getElementById("night"),
  form = document.querySelector("form"),
  taskAdd = document.getElementById("inp-task"),
  submit = document.getElementById("submit"),
  error = document.getElementById("error"),
  ul = document.getElementById("ul"),
  numberItems = document.getElementById("number"),
  allItems = document.getElementById("all"),
  activeItems = document.getElementById("active"),
  completeItems = document.getElementById("completed"),
  clearItems = document.getElementById("clear"),
  colorOne = document.getElementById("color-1"),
  All = document.getElementById("All"),
  n = 0;

light.onclick = lightMood;
night.onclick = nightMood;

let myList = JSON.parse(localStorage.getItem("list")) || [];

clearItems.onclick = () => {
  let z = document.querySelectorAll("#ul li");
  for (let i = 0; i < z.length; i++) {
    z[i].remove();
  }
  numberItems.textContent = 0;

  myList = [];

  localStorage.setItem("list", JSON.stringify(myList));
};

window.onload = () => {
  if (localStorage.key("list")) {
    getDataFromLocalStorage();
  }
  document.getElementById("inp-task").focus();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (taskAdd.value === "") {
    error.classList.remove("d-none");
  } else {
    error.classList.add("d-none");

    n = n + 1;
    // myList.push(document.getElementById("inp-task").value);

    myList.push({
      title: document.getElementById("inp-task").value,
      id: new Date().getTime(),
      completed: false,
    });

    document.getElementById("inp-task").value = "";
    location.reload();
  }
  localStorage.setItem("list", JSON.stringify(myList));
});

// console.log(myList.length);

function lightMood() {
  light.classList.add("d-none");
  night.classList.remove("d-none");
  colorOne.style.backgroundColor = "white";
}

function nightMood() {
  light.classList.remove("d-none");
  night.classList.add("d-none");
  colorOne.style.backgroundColor = "#181824";
}

// ******************************************************

function getDataFromLocalStorage() {
  myList.forEach((e) => {
    let label = document.createElement("li"),
      check = document.createElement("div"),
      div = document.createElement("div"),
      complete = document.createElement("div"),
      span = document.createElement("span"),
      title = document.createElement("h4"),
      del = document.createElement("i");

    del.className = "fa-solid fa-xmark delete";
    check.className = "doneList";
    span.className = "check";

    complete.className = "fa-solid fa-check done";

    div.style.position = "relative";

    div.append(complete, span);

    title.innerHTML = e.title;

    check.append(div, title);

    label.append(check, del);

    ul.prepend(label);

    del.onclick = () => {
      deleteDataFromLocalStorage(e.id);

      label.remove();
    };

    span.onclick = function () {
      complete.classList.toggle("block");

      if (complete.classList.contains("block")) {
        completedTasks(e.id, complete);
      }
    };
  });
}

// ******************************************************

document.getElementById("number").innerHTML = myList.length;

function deleteDataFromLocalStorage(id) {
  myList = myList.filter((e) => e.id !== id);

  localStorage.setItem("list", JSON.stringify(myList));

  document.getElementById("number").innerHTML = myList.length;
}

// localStorage.clear();
