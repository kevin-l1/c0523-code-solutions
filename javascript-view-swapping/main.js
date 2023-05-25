const $container = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

$container.addEventListener('click', () => {
     if (event.target.matches('.tab')) {
      for (let i = 0; i < $tab.length; i++) {
        $tab[i].className = 'tab'
        event.target.className = 'tab active';

        const $dataView = event.target.getAttribute('data-view');
        $view[i].className = 'view hidden'
        if($view[i].getAttribute('data-view') === $dataView) {
          $view[i].className = 'view';
        }
      }
     }
})
