const DOMSelectors = {
  button: document.querySelector("btn"),
  form: document.getElementById("form"),
  input: document.querySelectorAll("input"),
  box: document.querySelectorAll("text-box"),
};

DOMSelectors.form.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  console.log(input);
});
