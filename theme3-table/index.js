(async function () {
  const fetchData = await fetch("data.json");
  render(await fetchData.json());
})();

////// рендер шаблонов

function render(data) {
  const renderPlace = document.querySelector("#table-content-place");

  const renderForm = document.querySelector(".table-content").content;

  const tableFragment = document.createDocumentFragment();

  for (let i of data) {
    const clonedTableTemplate = renderForm.cloneNode(true);

    clonedTableTemplate.querySelector(".name p").textContent = i.name;
    clonedTableTemplate.querySelector(".surname p").textContent = i.surname;
    clonedTableTemplate.querySelector(".position p").textContent = i.position;
    clonedTableTemplate.querySelector(".salary p").textContent = i.salary;
    clonedTableTemplate.querySelector(".date p").textContent = i.date;

    tableFragment.appendChild(clonedTableTemplate);
  }
  renderPlace.appendChild(tableFragment);

  const arrP = document.querySelectorAll("p");

  const html = `
  <form class="form visible">
  <textarea class="textarea"></textarea>
  <div>
    <button type="submit" class="saveBtn">save</button>
    <button type="submit" class="cancelBtn">cancel</button>
  </div>
  </form>`;

  arrP.forEach((el) => el.insertAdjacentHTML("afterend", html));
}

///////////// работа с блоком

document
  .querySelector("#table")
  .addEventListener("click", (e) => getInputContent(e.target));

let baseEl,
  pEl,
  formEl,
  textareaEl,
  saveBtnEl,
  cancelBtnEl,
  saveBtnLisner,
  cancelBtnLisner;

const saveLisner = function (e) {
  saveContent(e);
};
const cancelLisner = function (e) {
  cancelContent(e);
};

//////// активизация блока

function getInputContent(el) {
  if (el.nodeName === "P") {
    if (baseEl) {
      handler();
      baseEl = null;
    }

    baseEl = el.parentNode;

    pEl = baseEl.querySelector("p");

    formEl = baseEl.querySelector(".form");
    addLisner();

    handler();
    textareaEl = formEl.querySelector("textarea");

    textareaEl.textContent = pEl.textContent;

    return;
  }
}

function handler() {
  pEl.classList.toggle("visible");
  formEl.classList.toggle("visible");
}

///////// обработка кнопок

function saveContent(e) {
  e.preventDefault();
  deleteLisner();

  const newData = baseEl.querySelector(".textarea").value;
  handler();

  pEl.textContent = newData;
  baseEl = null;
}

function cancelContent(e) {
  e.preventDefault();
  deleteLisner();

  handler();

  textareaEl.value = pEl.textContent;
  baseEl = null;
}

/////// динамические слушатели

function addLisner() {
  saveBtnEl = baseEl.querySelector(".saveBtn");
  cancelBtnEl = baseEl.querySelector(".cancelBtn");

  saveBtnLisner = saveBtnEl.addEventListener("click", saveLisner, false);

  cancelBtnLisner = cancelBtnEl.addEventListener("click", cancelLisner, false);
}

function deleteLisner() {
  saveBtnLisner = saveBtnEl.removeEventListener("click", saveLisner, false);
  cancelBtnLisner = cancelBtnEl.addEventListener("click", cancelLisner, false);
}
