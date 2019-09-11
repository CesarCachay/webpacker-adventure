import axios from "axios";

const API_URL = `https://swapi.co/api`;
const API_ALL_MOVIES = `https://swapi.co/api/films/`;

async function allMovies() {
  const listMovies = await axios
    .get(API_ALL_MOVIES)
    .then(response => response.data)
    .catch(error => console.log(error));
  return listMovies;
}

async function getFilm(number) {
  const response = await axios
    .get(`${API_URL}/films/${number}`)
    .then(response => response.data)
    .catch(error => console.log(error));
  return response;
}

export { allMovies, getFilm };
