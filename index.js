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
//6.
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
