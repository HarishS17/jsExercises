let count = 0;

function addCounter(){
  return () =>{
    count++;
    return count;
  }
}

function minusCounter(){
  return () =>{
    count--;
    return count;
  }
}

let startCount = addCounter()
let startMinusCount = minusCounter()
let resultElement = document.getElementById("value")

function setCountDefaultColor(){
  resultElement.style.color = "var(--clr-grey-1)"
}

document.querySelector("button[class='btn increase']").addEventListener('click', ()=>{
  resultElement.textContent = startCount()
  count > 0 ? resultElement.style.color = "var(--clr-green-dark)" : ""
  count == 0 ? setCountDefaultColor() : ""
  
});

document.querySelector("button[class='btn decrease']").addEventListener('click', ()=>{
  resultElement.textContent = startMinusCount()
  count < 0 ? resultElement.style.color = "var(--clr-red-dark)" : ""
  count == 0 ? setCountDefaultColor() : ""
});

document.querySelector("button[class='btn reset']").addEventListener('click', ()=>{
  count = 0
  resultElement.textContent = 0
  setCountDefaultColor()
});