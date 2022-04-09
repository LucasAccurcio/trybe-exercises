// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => apend(data));
};

const apend = (obj) => {
  const body = document.getElementById('jokeContainer');
  body.innerText = obj.joke;
};

window.onload = () => fetchJoke();