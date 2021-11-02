
export default () => {
  let html = [`<div class="peopleGroupImg"></div><p>wqnedsioniowmdoismiowqmaipdsm</p>`, `<div class="peopleGroupImg peopleGroupImg2"></div><p>gah galun ga galungah brrrrrr</p>`]
  let desc = document.querySelector(".who-desc")
  let btns = document.querySelector(".selection").children
  console.log("i run !")
  // btns.forEach((btn, i) => {
  //   btn.addEventListener("click", e => {
  //     desc.innerHTML = html[i]
  //   })
  // });
  for(let i = 0; i < btns.length; i ++) {
    btns[i].addEventListener("click", e => {
      desc.innerHTML = html[i]
    })
  }
}