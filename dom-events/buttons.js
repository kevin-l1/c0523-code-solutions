function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
const $clicked = document.querySelector(".click-button");
$clicked.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
const $hovered = document.querySelector(".hover-button");
$hovered.addEventListener("mouseover", handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
const $dblclicked = document.querySelector(".double-click-button");
$dblclicked.addEventListener('dblclick', handleDoubleClick);
