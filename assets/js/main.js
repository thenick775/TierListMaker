document.onreadystatechange = () => {
  if (document.readyState !== "complete") {
    return;
  }

  generateTable("tableBody");

  document.getElementById("btn-export").addEventListener("click", export2image);

  new bootstrap.Modal(document.getElementById("addContentModal"));
  document
    .getElementById("addContentModalSaveBtn")
    .addEventListener("click", saveModal);
  document.getElementById("addRowButton").addEventListener("click", addRow);

  // dragging elements outside of table rows will bubble up to the body handler
  // this drop handler will remove the dragged image
  const body = document.body;

  ["enter", "over", "leave"].forEach((name) => {
    body.addEventListener(`drag${name}`, preventDefault, false);
  });

  body.addEventListener(
    "drop",
    (ev) => {
      preventDefault(ev);

      const id = ev.dataTransfer.getData("text");
      const el = document.getElementById(id);

      el.parentNode.removeChild(el);
    },
    false
  );
};
