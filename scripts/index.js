(() => {
  document.querySelector("#settings").addEventListener("click", ($event) => {
    document.querySelector("#overlay").removeAttribute("hidden");
  });

  document.querySelector("#close").addEventListener("click", ($event) => {
    document.querySelector("#overlay").setAttribute("hidden", true);
  });
})();
