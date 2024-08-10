
document.getElementById("plus-btn").addEventListener("click", ()=>{
  document.getElementById("popup-overlay").style.display = "block"
  document.getElementById("popup-box").style.display = "block"
})

document.getElementById("cancel-btn").addEventListener("click", ()=>{
  document.getElementById("popup-overlay").style.display = "none"
  document.getElementById("popup-box").style.display = "none"
})

let createBtnEle = () =>{
  let createBtn = document.createElement("button")
  createBtn.setAttribute("class","delete-btn")
  createBtn.textContent = "DELETE"
  return createBtn
}

document.getElementById("add-btn").addEventListener("click", ()=>{
  let titleInput = document.getElementById("title-input").value
  let authorInput = document.getElementById("author-input").value
  let descriptionInput = document.getElementById("description-input").value

  let bookContainer = document.getElementById("book-container")
  bookContainer.innerHTML += `<div class="each-book-container">
          <h2>${titleInput}</h2>
          <h4>-${authorInput}</h4>
          <p>${descriptionInput}</p>
          <button class="delete-btn" onclick="deleteBtn(event)">DELETE</button>
        </div>`

})


// document.querySelector(".delete-btn").addEventListener("click",function(event){
//   console.log(event)
//   console.log(event.target)
//   console.log(event.target.parentElement)
//   // event.target.parentElement.remove()
// })
// instead above function added event handler onclick to delete btn
function deleteBtn(event){
  event.target.parentElement.remove()
}