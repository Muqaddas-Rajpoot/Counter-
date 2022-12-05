
let count=0;
function increment(){
    
   count+=1;
   document.getElementById("count").textContent=count;
}
function save(){
    let countStr=count +"  - "
    document.getElementById("save-el").textContent+=" "+countStr;
    document.getElementById("count").textContent=0;
    count=0;
 }
