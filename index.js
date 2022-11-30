let DOMSelectors = {
  button: document.getElementById("btn"),
  form: document.getElementById("form"),
  box: document.getElementById("form-parent"),
  input1: document.querySelector(".box1"),
  input2: document.querySelector(".box2"),
  input3: document.querySelector(".box3"),
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
});

function remove() {
  let displaycard = document.querySelector("div.display-card"),
    remove = displaycard.querySelector("button.remove");
  remove.addEventListener("click", function () {
    displaycard.remove();
  });
}

function clear() {
  DOMSelectors.input1.value = "";
  DOMSelectors.input2.value = "";
  DOMSelectors.input3.value = "";
}
