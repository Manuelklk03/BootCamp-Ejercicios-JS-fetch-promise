//RESUELVE TUS EJERCICIOS AQUI

// Ejercicio 1:
async function getAllBreeds() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();

  return Object.keys(data.message);
}

//Ejercicio 2:
async function getRandomDog() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();

  return data.message;
}

//Ejercicio 3
async function getAllImagesByBreed() {
  const response = await fetch("https://dog.ceo/api/breed/komondor/images");
  const data = await response.json();

  return data.message;
}

//Ejercicio 4
async function getAllImagesByBreed2(breed) {
  const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
  const data = await response.json();

  return data.message;
}

//Ejercicio 5
async function getGitHubUserProfile(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();

  return data;
}

//Ejercicio 6
async function printGithubUserProfile(username) {
  const user = await getGitHubUserProfile(username);

  const img = document.createElement("img");
  img.src = user.avatar_url;
  img.alt = user.name;

  const nombre = document.createElement("h2");
  nombre.textContent = user.name;

  document.body.append(img, nombre);

  return {
    img: user.avatar_url,
    name: user.name,
  };
}

//Ejercicio 7
async function getAndPrintGitHubUserProfile(username) {
  const user = await getGitHubUserProfile(username);

  return `
<section>
    <img src="${user.avatar_url}" alt="${user.name}">
    <h1>${user.name}</h1>
    <p>Public repos: ${user.public_repos}</p>
</section>`;
}

//Ejercicio 8
document.addEventListener("DOMContentLoaded", () => {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Usuario de GitHub";

  const button = document.createElement("button");
  button.textContent = "Buscar";

  const resultado = document.createElement("div");

  document.body.append(input, button, resultado);

  button.addEventListener("click", async () => {
    const username = input.value.trim();

    if (username) {
      resultado.innerHTML = await getAndPrintGitHubUserProfile(username);
    }
  });
});

//Ejercicio 9
async function fetchGithubUsers(userNames) {
  const promises = userNames.map((name) =>
    fetch(`https://api.github.com/users/${name}`).then((response) =>
      response.json(),
    ),
  );

  const users = await Promise.all(promises);

  users.forEach((user) => {
    console.log(user.html_url);
    console.log(user.name);
  });

  return users;
}
