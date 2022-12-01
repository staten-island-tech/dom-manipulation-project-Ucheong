let DOMSelectors = {
  button: document.getElementById("btn"),
  form: document.getElementById("form"),
  box: document.getElementById("form-parent"),
  input1: document.querySelector(".box1"),
  input2: document.querySelector(".box2"),
  input3: document.querySelector(".box3"),
  display: document.getElementById("display"),
};

function clearinputs() {
  DOMSelectors.input1.value = "";
  DOMSelectors.input2.value = "";
  DOMSelectors.input3.value = "";
}

function createcard() {
  let sport = DOMSelectors.input1.value,
    team = DOMSelectors.input2.value,
    img = DOMSelectors.input3.value;
  card(sport, img, team);
}

function card(sport, img, team) {
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="display-card">
    <h3 class="display-sport">${sport}</h3>
    <img class="display-img" src="${img}"/ >
    <h2 class="display-team">${team}</h2>
    <button class="remove" id="btn">Remove</button>
    </div>`
  );
}

function remove() {
  let remove = document.querySelectorAll(".remove");
  remove.forEach((removes) => {
    removes.addEventListener("click", function () {
      this.parentElement.remove();
    });
  });
}

DOMSelectors.form.addEventListener("submit", function (no) {
  no.preventDefault();
  createcard();
  remove();
  clearinputs();
});
