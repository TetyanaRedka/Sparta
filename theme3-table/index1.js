// let saveBtnEl


// class ActivePoint {
//   constructor() {
//     this.baseEl, this.pEl, this.formEl, this.textareaEl, this.saveBtnEl;
//   }

//   getInputContent(el) {

//     if (el.nodeName === "P") {
//       this.baseEl = el.parentNode;

//       this.pEl = this.baseEl.querySelector("p");

//       this.formEl = this.baseEl.querySelector(".form");

//       this.saveBtnEl = this.baseEl.querySelector(".saveBtn");
      
//       this.handler();

//       this.textareaEl = this.formEl.querySelector("textarea");
//       this.textareaEl.append(this.pEl.innerText);

//       return;
//     }
//   }

//   handler() {
//     this.pEl.classList.toggle("visible");
//     this.formEl.classList.toggle("visible");
//   }

//   saveContent(e) {
//     e.preventDefault();
//     //   const newData = changeInput();
//     //   console.log(newData);
//     //   const dataEl = tdEl.querySelector('p')
//     //   handler(dataEl, tdEl.querySelector('.form'))
//     //   dataEl.innerText = newData
//   }

// }

// const activePoint = new ActivePoint();

// document.querySelector("#table").addEventListener("click", (e) => activePoint.getInputContent(e.target));

// if(saveBtnEl){saveBtnEl.addEventListener("click", e => {e.preventDefault;
// console.log(e)})}
