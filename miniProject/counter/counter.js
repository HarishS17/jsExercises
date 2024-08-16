// let count = 0;

// function addCounter(){
//   return () =>{
//     count++;
//     return count;
//   }
// }

// function minusCounter(){
//   return () =>{
//     count--;
//     return count;
//   }
// }

// let startCount = addCounter()
// let startMinusCount = minusCounter()
// let resultElement = document.getElementById("value")

// function setCountDefaultColor(){
//   resultElement.style.color = "var(--clr-grey-1)"
// }

// document.querySelector("button[class='btn increase']").addEventListener('click', ()=>{
//   resultElement.textContent = startCount()
//   count > 0 ? resultElement.style.color = "var(--clr-green-dark)" : ""
//   count == 0 ? setCountDefaultColor() : ""
  
// });

// document.querySelector("button[class='btn decrease']").addEventListener('click', ()=>{
//   resultElement.textContent = startMinusCount()
//   count < 0 ? resultElement.style.color = "var(--clr-red-dark)" : ""
//   count == 0 ? setCountDefaultColor() : ""
// });

// document.querySelector("button[class='btn reset']").addEventListener('click', ()=>{
//   count = 0
//   resultElement.textContent = 0
//   setCountDefaultColor()
// });

// or below
let count = 0;
let valueElement = document.getElementById("value")
let btnElements = document.querySelectorAll(".btn")

btnElements.forEach((btn) =>{
  btn.addEventListener('click', (event)=>{
    // both are same in this case button triggered event and handler also attached with it
    // console.log(event.currentTarget); the ele where event handler attached
    // console.log(event.target); ele where triggered the event

    let classListAll = event.currentTarget.classList
    if(classListAll.contains("decrease")){
      count--
    } 
    else if(classListAll.contains("increase")){
      count++
    }
    else{
      count = 0
    }
    count > 0 ? valueElement.style.color = "var(--clr-green-dark)" : ""
    count < 0 ? valueElement.style.color = "var(--clr-red-dark)" : ""
    count === 0 ? valueElement.style.color = "var(--clr-grey-1)" : ""

    valueElement.textContent = count
  })
})