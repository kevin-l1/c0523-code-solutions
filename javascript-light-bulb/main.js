const $bulb = document.querySelector('.bulb-on');
const $background = document.querySelector('.light')

$bulb.addEventListener('click', () => {
    if ($bulb.className === 'bulb-on') {
      $background.className = 'dark';
      $bulb.className = 'bulb-off';
    } else {
      $background.className = 'light';
      $bulb.className = 'bulb-on';
    }
})
