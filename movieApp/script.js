const API_URL = 
    'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=669884dd3dc20e5247a3c21405536733&page=1';

const SEARCH_API = 'http://api.themoviedb.org/3/search/movie?api_key=669884dd3dc20e5247a3c21405536733&query=';

import {ManageMovies} from './ManageMovies.js'

const form = document.getElementById('from');
const search = document.getElementById("search");
const movieContainer = document.querySelector('.movie-container.grid');

const cardMovies = new ManageMovies();

getMovies(API_URL);
async function getMovies(url){
    const response = await fetch(url);
    const movie = await response.json();        
    const fragment = cardMovies.showCardMovies(movie.results);
    movieContainer.innerHTML='';
    movieContainer.append(fragment);
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const searchTerm = search.value;
    if(searchTerm){
        getMovies(SEARCH_API+ searchTerm);
        search.value = '';
    }else{
        window.location.reload();
    }
});

