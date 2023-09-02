const nums = document.getElementsByClassName("num")
const operators = document.getElementsByClassName("operator")
const ac = document.getElementById("ac")
const de = document.getElementById("de")
const equal = document.getElementById("equal")
const display = document.getElementById("numDis")
let flag = false
let ans = false

function displayHandler(inp){
    if(!flag){
        display.textContent=inp
        flag = true
        ans = false
    }else{
        display.textContent+=inp
        ans = false
    }
}
function acHandler (){
    display.textContent="0"
        ans = false
        flag = false
}
function equalHandler (){
    let expression = display.textContent;
  
    try {
      let result = eval(expression);
      
      if (!isNaN(result)) {
        display.textContent = result;
        lengthHandler()
        ans = true
      } 
    } catch (error) {
      display.textContent = "Error";
    }
    flag = false
}
function deHandler (){
    if(!ans){
        display.textContent=display.textContent.slice(0,display.textContent.length-1)
    if (!display.textContent[0]){
        display.textContent="0"
        flag = false
    }  
    }
  
}
function lengthHandler (){if(display.textContent.length>13){display.textContent="ERROR_len";flag=false}}

for(const num of nums) { 
    num.addEventListener("click", ()=>{
        displayHandler(num.name)
        lengthHandler()
    })
}
for(const op of operators) { 
    op.addEventListener("click", ()=>{
            if(ans){
                display.textContent+=op.name
                flag = true
            }else{
                displayHandler(op.name)

            }
            lengthHandler()
    })
}
ac.addEventListener("click", acHandler)
de.addEventListener("click", deHandler)
equal.addEventListener("click", equalHandler)
display.addEventListener("change", ()=>{if(display.textContent.length>13){display.textContent="ERROR"}})
