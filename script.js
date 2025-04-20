const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    item.classList.toggle("collapsible--expanded");
  })
);
