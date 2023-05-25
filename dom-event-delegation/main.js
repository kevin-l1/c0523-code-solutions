const $list = document.querySelector('.task-list');

$list.addEventListener('click', () => {
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.target && event.target.matches('button')) {
    let $closest = event.target.closest('.task-list-item');
    console.log($closest);
    $closest.remove();
  }
})
