import { buildCardTemplate } from "./CardTemplate.js";
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const score = {
    best_score: 8,
    good_score: 5
}

Object.freeze(score);
export class ManageMovies{
    constructor(){        
    }
    showCardMovies(movies){
        const fragment = new DocumentFragment();    
        for(let movie of movies){            
            const card = document.createElement('article');
            card.classList.add('card');
            const summarize = this.cutOverView(movie.overview);            
            card.innerHTML = buildCardTemplate(
                    {
                        poster_path:`${IMG_PATH+movie.poster_path}`,
                        title: movie.title,
                        vote_class: this.getVoteByRate(movie.vote_average),
                        vote_average:movie.vote_average,
                        summary: summarize 
                    }
                );
            fragment.append(card);
        }
        return fragment;
    }
    
    cutOverView(overview){
        const characterLength = 460;
        if(overview.length>500){
            return overview.slice(0,characterLength)+this.getMoreInfo();
        }
        return overview;
    }

    getMoreInfo(){
        return ' ...';
    }
    
    getVoteByRate(vote_average){        
        if(vote_average >= score.best_score ) return 'green';
        if(vote_average >= score.good_score) return 'orange';
        
        return 'red';  
    }
}