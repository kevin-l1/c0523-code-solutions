let clickCounter = 0;
const $hotBtn = document.querySelector('.hot-button');
const $clkCount = document.querySelector('.click-count');

$hotBtn.addEventListener('click', () => {
  clickCounter++
  $clkCount.textContent = clickCounter;
  if(clickCounter < 4) {
  $hotBtn.className = "hot-button cold";
  } else if(clickCounter < 7) {
  $hotBtn.className = "hot-button cool";
  } else if(clickCounter < 10) {
  $hotBtn.className = "hot-button tepid";
  } else if(clickCounter < 13) {
  $hotBtn.className = "hot-button warm";
  } else if(clickCounter < 16) {
  $hotBtn.className = "hot-button hot";
  } else {
  $hotBtn.className = "hot-button nuclear";
  }
})
