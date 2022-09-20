function keydownAction() {
  event.preventDefault();
  document.querySelector("#status").innerHTML = "KEYUP Event";
  
}


function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
