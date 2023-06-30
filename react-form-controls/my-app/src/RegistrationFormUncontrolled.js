export default function RegistrationFormUncontrolled() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const entries = Object.fromEntries(formData.entries());
    console.log(`Username: ${entries.username}, Password: ${entries.password}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" />
      </label>

      <label>
        Password:
        <input type="password" name="password" />
      </label>

      <button type="submit">Sign Up</button>
    </form>
  );
}
