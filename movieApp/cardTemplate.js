export function buildCardTemplate(movie){
    return `
        <img src="${movie.poster_path}" alt="" /> 
        <div class="card__info">
        <h4>${movie.title}</h4>
        <span class="rating ${movie.vote_class}">${movie.vote_average}</span>
        </div>
        <div class="card__overview">
        <h3>Overview</h3>                
        <p>${movie.summary}</p>
        </div>`;
}