import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  }

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" onChange={handleUsername} />
      </label>

      <label>
        Password:
        <input type="password" name="password" onChange={handlePassword} />
      </label>

      <button type="submit">Sign Up</button>
    </form>
  );
}
