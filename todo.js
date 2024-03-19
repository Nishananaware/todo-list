const input=document.querySelector("#inputtd");
const adds=document.querySelector(".testicon");
const listtodo=document.querySelector(".list"); 
const reset=document.querySelector("button");

adds.addEventListener("click",()=>{
  console.log("hello");
  let inputt = input.value;
  if(inputt.length == 0){
    alert("please enter your todo..");
  }else{
    let list1 =document.createElement("li");
    list1.innerHTML=`<p> ${inputt}</p>
    <h2 class="mark">Pending...</h2>
    <i class="fas fa-times remove"></i>
    <i class="far fa-edit"></i>`;
      listtodo.appendChild(list1);
      input.value="";
      
      const marked=document.querySelector(".mark");
      marked.addEventListener("click", ()=> {
        marked.textContent = "Complete...";
        marked.style.color="green"
      });
      let move= list1.querySelector(".remove");
      move.addEventListener("click",() =>{
        listtodo.removeChild(list1);
      });
    }
  });
  reset.addEventListener("click",() =>{
    listtodo.innerHTML="";
  });
