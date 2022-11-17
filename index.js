const DOMSelectors = {
  button: document.getElementById("btn"),
  form: document.getElementById("form"),
  input: document.querySelector("input"),
  box: document.getElementById("form-parent"),
};

DOMSelectors.form.addEventListener("submit", function (no) {
  no.preventDefault();
});

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("afterend", `<p>${input}</p>`);
  DOMSelectors.input.value = "";
});
