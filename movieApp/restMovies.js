export async function getMovies(api_url){
    const response = await fetch(api_url);
    const movie = await response.json();        
    return movie.results;    
}
