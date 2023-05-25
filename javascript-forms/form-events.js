function handleFocus(event) {
  console.log('focus event fired');
  console.log(event.target.name);
}

function handleBlur() {
  console.log('blur event fired');
  console.log(event.target.name);
}

function handleInput() {
  console.log(event.target.name + ':' + event.target.value);
}

const $name = document.querySelector('#user-name')
const $email = document.querySelector('#user-email')
const $text = document.querySelector('#user-message')

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$text.addEventListener('focus', handleFocus);
$text.addEventListener('blur', handleBlur);
$text.addEventListener('input', handleInput);
