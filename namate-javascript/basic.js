
function attachEventListner(){
let count = 0;
document.getElementById("click me").addEventListener("click",
function xyz(){
    console.log("button click times", ++count);
})
}
attachEventListner();


