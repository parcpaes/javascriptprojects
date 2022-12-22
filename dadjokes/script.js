import { writeJoke } from "./writeJoke.js";

const btnJoke = document.getElementById('get-joke');

btnJoke.addEventListener('click',writeJoke);