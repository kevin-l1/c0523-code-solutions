$heading = document.querySelector('.message')

function changeHeading() {
  $heading.textContent = 'Hello There'
}

setTimeout(changeHeading, 2000)
