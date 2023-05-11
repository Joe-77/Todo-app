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
  n = 1;

light.onclick = lightMood;
night.onclick = nightMood;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (taskAdd.value === "") {
    error.classList.remove("d-none");
  } else {
    error.classList.add("d-none");

    let label = document.createElement("label"),
      input = document.createElement("input"),
      div = document.createElement("div"),
      li = document.createElement("li"),
      liImg = document.createElement("img"),
      content = document.createElement("p");

    li.classList.add("lists");
    li.setAttribute("id", "Lists");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", "done");
    liImg.src = "img/icon-cross.svg";
    liImg.setAttribute("id", "del");
    content.classList.add("content");
    content.innerHTML = taskAdd.value;
    All.before(li);
    label.appendChild(input);
    label.appendChild(div);
    li.prepend(label);
    li.appendChild(liImg);
    liImg.before(content);
    ul.prepend(li);
    taskAdd.value = "";
    numberItems.innerHTML = n++;

    let done = document.getElementById("done"),
      Lists = document.getElementById("Lists"),
      Del = document.getElementById("del");

    done.addEventListener("change", () => {
      if (done.checked) {
        Lists.style.textDecoration = "line-through";
        Lists.setAttribute("id", "show-active");
      } else {
        Lists.style.textDecoration = "none";
        Lists.removeAttribute("id", "show-active");
      }
    });
    Del.addEventListener("click", function () {
      Lists.style.display = "none";
      Lists.removeAttribute("id", "show-active");
      if (n > 0) {
        n--;
        numberItems.innerHTML = n - 1;
      }
    });

    clearItems.addEventListener("click", () => {
      Lists.style.display = "none";
      Lists.removeAttribute("id", "show-active");
      n = 1;
      numberItems.innerHTML = 0;
    });

    allItems.addEventListener("click", () => {
      Lists.removeAttribute("id", "show-active");
      Lists.style.display = "flex";
    });

    completeItems.addEventListener("click", () => {
      Lists.style.display = "none";
      numberItems.innerHTML = n - 1;
    });
    // allItems.addEventListener("click", () => {
    //   Lists.removeAttribute("id", "show-active");
    //   Lists.style.display = "flex";
    // });
  }
});
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

// function itemsAll() {
//   Lists.removeAttribute("id", "show-active");
//   Lists.style.display = "flex";
//   numberItems.innerHTML = n - 1;
// }
