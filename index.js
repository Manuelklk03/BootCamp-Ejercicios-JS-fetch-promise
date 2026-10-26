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
