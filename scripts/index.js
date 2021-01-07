const { ipcRenderer } = require("electron");


document.querySelector("#settings").addEventListener("click", ($event) => {
  document.querySelector("#overlay").removeAttribute("hidden");
});

document.querySelector("#close").addEventListener("click", ($event) => {
  document.querySelector("#overlay").setAttribute("hidden", true);
});

document.querySelector(".toggle").addEventListener("click", ($event) => {
  $event.preventDefault();
  let currentValue = $event.target.checked;
  $event.target.setAttribute('checked', false);
  console.log(currentValue);
  // ipcRenderer.sendSync("synchronous-message", {
  //   settings: { notifications: true },
  // });
});

// In renderer process (web page).

ipcRenderer.on("asynchronous-reply", (event, arg) => {
  console.log(arg); // prints "pong"
});
