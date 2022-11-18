let DOMSelectors = {
  button: document.getElementById("btn"),
  form: document.getElementById("form"),
  input1: document.querySelector(".text-box1"),
  input2: document.querySelector(".text-box2"),
  input3: document.querySelector(".text-box3"),
  box: document.getElementById("form-parent"),
};

DOMSelectors.form.addEventListener("submit", function (no) {
  no.preventDefault();
});

DOMSelectors.form.addEventListener("submit", function () {
  let input1 = DOMSelectors.input1.value,
    input2 = DOMSelectors.input2.value,
    input3 = DOMSelectors.input3.value;
  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
    `<p>
  ${input1}
  ${input2}
  ${input3}
  </p>`
  );
  DOMSelectors.input1.value = "";
  DOMSelectors.input2.value = "";
  DOMSelectors.input3.value = "";
});
