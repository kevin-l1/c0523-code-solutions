const $countdown = document.querySelector('.countdown-display')
let interval;
let counter = 4;

function settingInterval() {
  counter--;
  if (counter > 0) {
    $countdown.textContent = counter;
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~'
    clearInterval(interval)
  }
}

interval = setInterval(settingInterval, 1000)
