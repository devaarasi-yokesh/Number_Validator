const inputVal = document.getElementById("user-input");
const outputBox = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
// console.log(inputVal.value)
const checkValid = () => {
  if(!inputVal.value){             
    alert("Please provide a phone number");
  }
  const reg = /1?\s*?\(?\d\d\d\)?\s?\-?\d+-?\s*?\d+/i;
  const len = inputVal.value.match(/\d+/g);
  const another = inputVal.value.match(/-+/g);
  const bracket = inputVal.value.match(/\(+|\)+/g) 
  console.log(len,bracket,len?len.length:false);
  const value=len.reduce((item,num)=>item+num,'')
  console.log(value,'value',( (len.length >= 3 && len[0] !== '1') || (len.length <= 2 && value.length > 10)|| (value.length < 10) || (another.length > 2) || (bracket.length === 1) || (bracket.length === 2 && len.length === 1)))

if(len){
 if( (len.length >= 3 && len[0] !== '1') || (len.length <= 2 && value.length > 10)|| (value.length < 10) || (another.length > 2) || (bracket.length === 1) || (bracket.length === 2 && len.length === 1)){
   console.log("it is")
   outputBox.innerText = "Invalid US number: "+inputVal.value; 
  }
} 
 else{
   outputBox.innerText = "Valid US number: "+inputVal.value;
 }
}

const clearBox = () => {
  outputBox.innerText = "";
}
checkBtn.addEventListener("click",checkValid);
clearBtn.addEventListener("click",clearBox);
outputBox.style.border = "3px solid green";
