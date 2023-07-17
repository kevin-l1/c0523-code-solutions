async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(response.status);
    }
    const result = await response.json();
    console.log(result);
    console.log(response.status);
    return result;
  } catch (error) {
    console.error(error);
  }
}
fetchData();
