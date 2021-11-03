
export default () => {
  let html = [`<div class="peopleGroupImg"></div><p>Studies state that 1 of 345 children are born with Cerebral Palsy. This percent is higher between boys.</p>`, `<div class="peopleGroupImg peopleGroupImg2"></div><p>Celebral Palsy can develope as early as during infancy. The earlier it is diagnosed, the better treatment the child may receive.</p>`]
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