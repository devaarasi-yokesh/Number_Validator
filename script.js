const inputVal = document.getElementById("user-input");
const outputBox = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
console.log(inputVal.value)
const checkValid = () => {
  if(!inputVal.value){
    alert("Please provide a phone number");
  }
  const reg = /1*?\s*?\(*?\d\d\d\)*?\s?\-?\d\d\d\-?\s*?\d\d\d\d/i;
  console.log(reg.test(inputVal.value))
  if(reg.test(inputVal.value)){
    if(inputVal.value.includes(")") && inputVal.value.indexOf("(") == -1){
outputBox.innerText = "Invalid US number: "+inputVal.value;
    }
    else if(inputVal.value.length > 10 && inputVal.value[0] !== 1){
      console.log(inputVal.value[0],inputVal.value.length)
      outputBox.innerText = "Invalid US number: "+inputVal.value;
    }
    else{
     outputBox.innerText = "Valid US number: "+inputVal.value;
    }
  }
 else{
   outputBox.innerText = "Invalid US number: "+inputVal.value;
 }
}
const clearBox = () => {
  outputBox.innerText = "";
}
checkBtn.addEventListener("click",checkValid);
clearBtn.addEventListener("click",clearBox);
outputBox.style.border = "3px solid green";
