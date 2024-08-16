// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


let toggleElement = document.querySelector(".nav-toggle")
let linkElement = document.querySelector(".links")
toggleElement.addEventListener('click', ()=>{
  if(linkElement.classList.contains("show-links")){
    linkElement.classList.remove("show-links")
    toggleElement.style.transform = "rotate(0deg)"
  } else {
    linkElement.classList.add("show-links")
    toggleElement.style.transform = "rotate(90deg)"
  }
})