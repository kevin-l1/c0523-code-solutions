const $modal = document.querySelector('.modal');
const $pop_up = document.querySelector(".pop-up");
const $btn_no = document.querySelector('.no');
const $overlay = document.querySelector('.overlay');

$modal.addEventListener('click', ()=> {
  $pop_up.classList.remove('hidden');
  $overlay.classList.remove('hidden');
})

$btn_no.addEventListener('click', ()=> {
  $pop_up.classList.add('hidden');
  $overlay.classList.add('hidden');
})
