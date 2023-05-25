const $form = document.querySelector('#contact-form')

function handleSubmit(event) {
  event.preventDefault();
  const $name = $form.elements.name.value
  const $email = $form.elements.email.value
  const $message = $form.elements.message.value
  let $formContent = {
    name: $name,
    email: $email,
    message: $message,
  };
  console.log($formContent);
  $form.reset();
}

$form.addEventListener('submit', handleSubmit)
