$modal = document.querySelector('.modal');
$pop_up = document.querySelector(".pop-up");
$btn_no = document.querySelector('.no');
$overlay = document.querySelector('.overlay');

$modal.addEventListener('click', ()=> {
  $pop_up.classList.remove('hidden');
  $overlay.classList.remove('hidden');
})

$btn_no.addEventListener('click', ()=> {
  $pop_up.classList.add('hidden');
  $overlay.classList.add('hidden');
})
