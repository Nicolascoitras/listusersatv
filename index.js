const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const userList = document.getElementById('user-list');
const errorMessage = document.getElementById('error-message');

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Erro na requisição da API');
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });
  })
  .catch((error) => {
    errorMessage.textContent = 'Ocorreu um erro na requisição: ' + error.message;
  });
