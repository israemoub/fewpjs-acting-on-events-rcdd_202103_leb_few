// Your code here

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
 
    dodger.style.left = `${left - 1}px`;
  }
});

function moveDodgerRight() {
  let RightNumbers = dodger.style.right.replace("px", "");
  let right = parseInt(rightNumbers, 10);
 
  if (right > 0) {
    dodger.style.right = `${right + 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});