const urlBase = 'http://localhost:3000';

const getCars = (success, failure) => {
    fetch(urlBase + '/car')
      .then(response => response.json())
      .then(success)
      .catch(failure);
}

const deleteCar = (success, failure, id) => {
  fetch(urlBase + '/car/' + id , { method: 'DELETE' })
  .then(response => response.json())
  .then(success)
  .catch(failure);
}

const API = {
  getCars,
  deleteCar
};

API.getCars(
  (duomenys) => console.log(duomenys),
  (klaida) => console.error(klaida))

// API.deleteCar(
//   (duomenys) => console.log(duomenys),
//   (klaida) => console.error(klaida),
//   "103")

// API.getCars(
//   (duomenys) => console.log(duomenys),
//   (klaida) => console.error(klaida))
  