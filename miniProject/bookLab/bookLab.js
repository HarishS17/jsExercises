
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
  let bookContainer = document.getElementById("book-container")
  bookContainer.innerHTML += `<div class="each-book-container">
          <h2></h2>
          <h4>-</h4>
          <p></p>
          <button class="delete-btn">DELETE</button>
        </div>`

})

document.getElementById("delete-btn").addEventListener("click",()=>{
  event.target.parentElement.remove()
})