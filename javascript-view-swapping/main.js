const $container = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

$container.addEventListener('click', () => {
  if (event.target.matches('.tab')) {
    event.target.className = 'active tab';
      for (let i = 0; i < $tab.length; i++) {
        if (event.target != $tab[i]) {
          $tab[i].className = 'tab';
        }

        const $dataView = event.target.getAttribute('data-view');

        if($dataView != $view[i].getAttribute('data-view')) {
          $view[i].className = 'view hidden'
        } else {
          $view[i].className = 'view';
        }
      }
  }
})
