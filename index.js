let DOMSelectors = {
  button: document.getElementById("btn"),
  form: document.getElementById("form"),
  input1: document.querySelector(".box1"),
  input2: document.querySelector(".box2"),
  input3: document.querySelector(".box3"),
  box: document.getElementById("form-parent"),
  display: document.getElementById("display"),
};

DOMSelectors.form.addEventListener("submit", function (no) {
  no.preventDefault();
});

DOMSelectors.form.addEventListener("submit", function () {
  let input1 = DOMSelectors.input1.value,
    input2 = DOMSelectors.input2.value,
    input3 = DOMSelectors.input3.value;
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="display-card">
    <h3 class="display-sport">${input1}</h3>
    <img class="display-img" src="${input3}"/>
    <h2 class="display-team">${input2}</h2>
    <button class="remove" id="btn">Remove</button>
    </div>`
  );
  DOMSelectors.input1.value = "";
  DOMSelectors.input2.value = "";
  DOMSelectors.input3.value = "";
  let displaycard = document.querySelector("div.display-card"),
    remove = displaycard.querySelector("button.remove");
  remove.addEventListener("click", function () {
    displaycard.remove();
  });
});
