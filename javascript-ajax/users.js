$userList = document.querySelector('#user-list');

function getUser() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    console.log(xhr.status);
    console.log(xhr.response);
    for (let i = 0; i < xhr.response.length; i++) {
      let $li = document.createElement('li')
      $li.textContent = xhr.response[i].name;
      $userList.append($li);
    }
  })
  xhr.send();
}

getUser()
