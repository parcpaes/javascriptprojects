import { buildCardTemplate } from "./cardTemplate.js";
const score = {
    best_score: 8,
    good_score: 5
}

Object.freeze(score);
export class ManageMovies{
    constructor(){        
    }
    createMovieCards(movies){
        const fragment = new DocumentFragment();
        for(let movie of movies){                       
            const card = buildCardTemplate(
                    {
                        poster_path:movie.poster_path,
                        title: movie.title,
                        vote_class: this.getVoteByRate(movie.vote_average),
                        vote_average:movie.vote_average,
                        overview: this.cutOverView(movie.overview)
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