import {ManageMovies} from '../ManageMovies';

import { buildCardTemplate } from '../cardTemplate';

const mock_movies =[ 
    {
        poster_path:'image1.jpg',
        title: 'Puss in Boots: The Last Wish',
        vote_class:'green',
        vote_average: 8.6,
        overview:'Puss in Boots discovers that his passion for adventure...' 
    },
    {
        poster_path:'image2.jpg',
        title: 'Devotion',
        vote_class:'orange',
        vote_average: 7.1,
        overview:'The harrowing true story of two elite US Navy fighter pilots during the Korean War...' 
    }
]


describe("ManageMovies",()=>{
    let manageMovies;
    beforeEach(()=>{
        manageMovies = new ManageMovies();
    })
    it('should return green when the value greater than or equal to 8',()=>{        
        const actual = manageMovies.getVoteByRate(8);
        const expected = 'green';
        expect(actual).toBe(expected);
    });

    it('should return orange when the value is greater than or equal to 5 and less than 8',()=>{        
        const actual = manageMovies.getVoteByRate(7.9);
        const expected = 'orange';        
        expect(actual).toBe(expected);
    });

    it('should return red when getVoteByRate is called',()=>{
        const actual = manageMovies.getVoteByRate(0);
        const expected = 'red';
        expect(actual).toBe(expected);
    });

    it('should return less than 500 character when cutOverView is called',()=>{
        const overview = `
        Newly engaged Shelby John and Ruby Red want a fresh start
        after their struggles with addiction, 
        but when Shelby discovers his beloved Ruby dead on their porch,
        he embarks on a vengeful killing spree of the dealers who supplied her.
        Armed with nothing but adrenaline and a nail gun,
        Shelby begins to unleash chaos on the town’s criminal underbelly,
        as he hunt’s down crime lord Coyote.
        Sheriff Church must race against the clock to put an end to Shelby's vigilante justice before the entire town descends into a bloodbath.
        `;
        const actual = manageMovies.cutOverView(overview);
        const expected = 500
        expect(actual.length).toBeLessThan(expected);
    });

    it('it should return card list',()=>{        
        const expectedMovies = mock_movies.map((movie)=> buildCardTemplate(movie));
        const fragment = manageMovies.createMovieCards(mock_movies);
        const actualList =Array.from(fragment.children);
        expect(actualList).toEqual(expectedMovies);  
    });

})