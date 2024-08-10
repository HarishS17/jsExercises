
document.getElementById("plus-btn").addEventListener("click", ()=>{
  document.getElementById("popup-overlay").style.display = "block"
  document.getElementById("popup-box").style.display = "block"
})

function displayNoneFun(){
  document.getElementById("popup-overlay").style.display = "none"
  document.getElementById("popup-box").style.display = "none"
}

document.getElementById("cancel-btn").addEventListener("click", (event)=>{
  event.preventDefault() // to prevent form action when clicking both add and cancel btns
  displayNoneFun()
})

document.getElementById("add-btn").addEventListener("click", (event)=>{
  event.preventDefault()
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
  displayNoneFun()
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