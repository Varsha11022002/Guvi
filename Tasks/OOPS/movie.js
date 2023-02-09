class Movie {
    constructor(title= '', studio = '', rating = 'PG') {
       this.title = title;
       this.studio = studio;
       this.rating = rating;
    }
 
    getPG(movies = [], rating = '') {
       return movies.filter((m) => m.rating === rating);
    }
}



const casionRoyaleMovie = new Movie('Casino Royale', 'Eon Productions', 'PG13');
const leo = new Movie('Leo', 'LCU', 'PG');
const vikram = new Movie('Vikram', 'Vijay', 'PG');
const avatar = new Movie('Avatar: The water way', 'EROS', 'PG13');
const avengers = new Movie('The avengers: End Game', 'LCU', 'PG');
const master=new Movie('Master','Vijay','R');
const beast=new Movie('Beast','Vijay','R')
 
const moviesArray = [casionRoyaleMovie, leo, vikram, avatar, avengers,master,beast];
 
console.log(casionRoyaleMovie.getPG(moviesArray, 'R'));
console.log(casionRoyaleMovie.getPG(moviesArray, 'PG'));
console.log(casionRoyaleMovie.getPG(moviesArray, 'PG13'));




















 

