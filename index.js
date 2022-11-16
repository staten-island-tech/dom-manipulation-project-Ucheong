const DOMSelectors = {
  button: document.getElementById("btn"),
  form: document.getElementById("form"),
  input: document.querySelectorAll(".input"),
  box: document.getElementById("form-parent"),
};

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  console.log(input);
  DOMSelectors.box.insertAdjacentHTML("afterend", `<p>${input}</p>`);
});
