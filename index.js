// Your code here

let dodger = document.getElementById("dodger");


function moveDodgerRight() {
  let rightNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(rightNumbers, 10);
 
  if (left < 400) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});