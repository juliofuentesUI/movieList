import React, {Component} from 'react';
import MovieListEntry from './MovieListEntry.jsx';

//REMEMBER movieList hasnt been injected into APP.jsx 
//so my code will not break right now
var MovieList = (props) => {
    return (
        <ul>
           {props.movieList.map((movie, index) => {
                return <MovieListEntry key={movie.title} movie={movie.title}/> 
           })} 
        </ul>
    )
}


export default MovieList;