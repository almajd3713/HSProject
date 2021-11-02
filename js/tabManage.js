// no touchy this, work on what's below
let append = (component) => {
  if(document.querySelectorAll(".container").length > 1) {
    document.querySelector("body").removeChild(document.querySelector("body").lastChild)
  }
  document.querySelector("body").appendChild(component)
}



// btn manager
export default (btn, components, other) => {
  btn[0].onclick = () => append(components[1])
  btn[1].onclick = () => {append(components[2]); setTimeout(() => {
    other[0]()
  }, 200);}
  btn[2].onclick = () => append(components[3]);
  btn[3].onclick = () => append(components[4]);
  btn[4].onclick = () => {append(components[5]); setTimeout(() => {
    other[1]()
  }, 200);}
}