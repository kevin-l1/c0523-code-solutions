$left = document.querySelector('.fa-chevron-left')
$right = document.querySelector('.fa-chevron-right')
$circleContainer = document.querySelector('.circles')
$circles = document.querySelectorAll('.fa-circle')
$imageContainer = document.querySelector('.pictures')
$img = document.querySelectorAll('img')

let indexNum = 0

$circleContainer.addEventListener('click', () => {
  for (let i = 0; i < $circles.length; i++) {
    if ($circles[i] === event.target) {
      event.target.classList.replace('fa-regular', 'fa-solid');
      $img[i].classList.remove('hidden')
      indexNum = i;
    } else {
      $img[i].setAttribute('class', 'hidden')
      $circles[i].classList.replace('fa-solid', 'fa-regular');
      }
    }
  }
)

function moveLeft() {
  if ($img[indexNum - 1] === undefined) {
    $img[$img.length - 1].classList.remove('hidden');
    $img[indexNum].classList.add('hidden');
    $circles[$img.length - 1].classList.replace('fa-regular', 'fa-solid');
    $circles[indexNum].classList.replace('fa-solid', 'fa-regular');
    indexNum = $img.length - 1
  } else {
    indexNum--
    $img[indexNum].classList.remove('hidden');
    $img[indexNum + 1].classList.add('hidden');
    $circles[indexNum].classList.replace('fa-regular', 'fa-solid');
    $circles[indexNum + 1].classList.replace('fa-solid', 'fa-regular');
  }
}


function moveRight() {
  if ($img[indexNum + 1] === undefined) {
    $img[0].classList.remove('hidden');
    $img[indexNum].classList.add('hidden');
    $circles[0].classList.replace('fa-regular', 'fa-solid');
    $circles[indexNum].classList.replace('fa-solid', 'fa-regular');
    indexNum = 0
  } else {
    indexNum++
    $img[indexNum].classList.remove('hidden');
    $img[indexNum - 1].classList.add('hidden');
    $circles[indexNum].classList.replace('fa-regular', 'fa-solid');
    $circles[indexNum - 1].classList.replace('fa-solid', 'fa-regular');
  }
}

$left.addEventListener('click', () => {
  moveLeft();
  clearInterval(carousel);
  carousel = setInterval(moveRight, 3000);
});


$right.addEventListener('click', () => {
  moveRight();
  clearInterval(carousel);
  carousel = setInterval(moveRight, 3000)
});



let carousel = setInterval(moveRight, 3000)
