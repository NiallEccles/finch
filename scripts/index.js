const { ipcRenderer } = require("electron");
import Overlay from "./overlay";
import Todo from "./todo";

Overlay();
let todo = [];
todo.push(
  new Todo("First Todo", "Test", {
    name: "Gotta crate object",
    status: "incomplete",
    tag: "Test",
    dateCreated: new Date(),
  })
);
todo.push(
  new Todo("Second Todo", "Test 2", {
    name: "Gotta fix object",
    status: "incomplete",
    tag: "Test",
    dateCreated: new Date(),
  })
);
// console.log(todo);

document.querySelector(".lists-container").innerHTML = `<ul class="lists"></ul>`;

todo.forEach((todo) => {
  console.log(todo);
  document.querySelector(".lists").innerHTML += `<li onclick="getTodoInfo(todo.name)">${todo.name}</li>`;
});

function getTodoInfo(id){
  console.log(id);
}
// ipcRenderer.sendSync("synchronous-message", {
//   settings: { notifications: true },
// });

// In renderer process (web page).

ipcRenderer.on("asynchronous-reply", (event, arg) => {
  console.log(arg); // prints "pong"
});
