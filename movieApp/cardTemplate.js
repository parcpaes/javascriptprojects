const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

export function buildCardTemplate(movie){
    const card = document.createElement('article');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${IMG_PATH+movie.poster_path}" alt="" /> 
        <div class="card__info">
        <h4>${movie.title}</h4>
        <span class="rating ${movie.vote_class}">${movie.vote_average}</span>
        </div>
        <div class="card__overview">
        <h3>Overview</h3>                
        <p>${movie.overview}</p>
        </div>`;
    return card;
}