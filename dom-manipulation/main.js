let clickCounter = 0;
const $hotBtn = document.querySelector('.hot-button');
const $clkCount = document.querySelector('.click-count');
$hotBtn.addEventListener('click', () => {
  clickCounter++
  document.querySelector(".click-count").textContent = clickCounter;
  if(clickCounter < 4) {
  document.querySelector(".hot-button").className = "hot-button cold";
  } else if(clickCounter < 7) {
  document.querySelector(".hot-button").className = "hot-button cool";
  } else if(clickCounter < 10) {
  document.querySelector(".hot-button").className = "hot-button tepid";
  } else if(clickCounter < 13) {
  document.querySelector(".hot-button").className = "hot-button warm";
  } else if(clickCounter < 16) {
  document.querySelector(".hot-button").className = "hot-button hot";
  } else {
  document.querySelector(".hot-button").className = "hot-button nuclear";
  }
})
