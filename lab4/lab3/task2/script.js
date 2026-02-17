const form = document.getElementById("my-todo");
const list = document.getElementById("my-list");
const input = document.getElementById("todo-text");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.className = "list-item";

  const left = document.createElement("div");
  left.className = "left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = text;

  checkbox.addEventListener("change", function () {
    span.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });

  left.appendChild(checkbox);
  left.appendChild(span);

  const del = document.createElement("button");
  del.className = "del";
  del.textContent = "Delete"

  del.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(left);
  li.appendChild(del);
  list.appendChild(li);

  input.value = "";
  input.focus();
});