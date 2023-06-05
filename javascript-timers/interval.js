$countdown = document.querySelector('.countdown-display')

let interval;

function settingInterval(callback) {
  if ($countdown.textContent === '~Earth Beeeelooowww Us~') {
   clearInterval(interval);
   return;
  }
  if ($countdown.textContent === '4') {
    $countdown.textContent = '3'
  } else if ($countdown.textContent === '3') {
    $countdown.textContent = '2'
  } else if ($countdown.textContent === '2') {
    $countdown.textContent = '1'
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~'
  }
}

interval = setInterval(settingInterval, 1000)
