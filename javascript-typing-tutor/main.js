$letters = document.querySelectorAll('span')
let index = 0;

function tutor(event) {
  if (event.key === $letters[index].textContent) {
    $letters[index].className = 'correct';
    $letters[index + 1].className = 'current';
    index++;
  } else {
    $letters[index].className = 'current incorrect';

  }
return;
}

document.addEventListener('keydown', tutor)
