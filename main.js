var i = 16;
function encreaseSize(){
    document.querySelector("p").style.fontSize = i++ + "px";
}
function decreaseSize(){
    document.querySelector("p").style.fontSize = i-- + "px";
}
document.querySelector(".encrease").onclick = encreaseSize;
document.querySelector(".decrease").onclick = decreaseSize;
