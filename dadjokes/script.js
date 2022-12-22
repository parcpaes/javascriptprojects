
import { RestJoke } from "./RestJoke.js";

const btnJoke = document.getElementById('get-joke');
const URI_API = 'https://icanhazdadjoke.com';
const restJoke = new RestJoke(URI_API);

export async function writeJoke(event){    
    const paragraph = document.getElementById('paragraph');
    const jokeJson =  await restJoke.getRandom();    
    paragraph.textContent = jokeJson.joke;
}



