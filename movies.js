// MOVIES CONSTRUCTOR
class Movie { 
     constructor (name, director, rating){
        this.movieName = name;
        this.director_name = director;
        if(rating === undefined){
            this.movieRating = "U"
        }else{
        this.movieRating = rating;
        }
    }
    //GET U RATED MOVIES
     hitMovies (arr) {
        let ratedU =[];
        for(let i =0 ; i< arr.length ; i++){
            if(a[i].movieRating === "U"){
              ratedU.push(a[i].movieName);
            }
        }
        return ratedU;
        
    }
}
const movie1 = new Movie ("vinnaithaandi varuvaya " , "gautam menon" , "u");
const movie2 = new Movie ("Rab ne bana di jodi" , "adithya chopra" , "U");
const movie3 = new Movie ("rockstar" , "imtiaz Ali" ,"U");

