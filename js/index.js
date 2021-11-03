
// DONT TOUCH THIS FILE ! IT WILL BREAK WITH ANY TOUCH



import btnManager from "./tabManage.js"
import peopleLoad from "./logic.js"
import randomizer from "./randomizer.js"
import questManag from "./questionLogic.js"

let btn;
let paths = ["../components/heading.html", "../components/definition.html", "../components/who.html", "../components/symptoms.html", "../components/treatment.html", "../components/questions.html"];

let importComponents = async(paths) => {
  let components = await Promise.all(paths.map(async(path) => {
    let div = await fetch(path).then(res => res.text()).then(data => {
      let el = document.createElement("div")
      el.innerHTML = data
      return el
    })
    return div
  }))
  return components
}
let startEvent = async() => {
  let components = await importComponents(paths)
  console.log(components[1])
  document.querySelector("body").appendChild(components[0])
  setTimeout(() => {
    document.querySelector(".heading-container").style.opacity = 1
    btn = document.querySelectorAll(".btn")
    btnManager(btn, components, [peopleLoad, randomizer, questManag])
  }, 100);
  document.removeEventListener("click", await startEvent)
}

setTimeout(() => {
  document.addEventListener("click", startEvent)}
, 100);
