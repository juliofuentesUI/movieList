import React, {Component} from 'react';
import Movies from '../data/exampleVideoData.js';
import SearchBar from './SearchBar.jsx';
import AddMovieBar from './AddMovieBar.jsx';
import MovieList from './MovieList.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           movies: [],
           currentQuery: '',
           movieToAdd: '',
           result: ''
        }

        this.queryHandler = this.queryHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.addMovie = this.addMovie.bind(this);
    }

    addMovie() {
        //EXTRACT THE MOVIETOADD VARIABLE FIRST.
        //Cannot modify state directly, must make a copy and push
        var currentMovie = {};
        currentMovie.title = this.state.movieToAdd;
        var moviesCopy = [...this.state.movies];
        moviesCopy.push(currentMovie);
        this.setState({
            movies: moviesCopy,
            movieToAdd: ''
        })
    }

    submitHandler(event) {
        event.preventDefault();
        console.log('submithandler default prevented');
        for (var value of this.state.movies) {
            if (value.title.toLowerCase().includes(this.state.currentQuery.toLowerCase())) {
                this.setState({
                    result: value.title,
                    currentQuery: ''
                })
            }
        }
    }

    queryHandler({target}) {
        //this handler is being used by both AddMovieBar and SearchBar
        var {name, value} = target;
        this.setState({
            [name]: value
        })
        console.log('i ran');
        //for every keystroke, update current Query state
    }

    render() {

        return (
            <div>
                <SearchBar currentQuery={this.state.currentQuery} 
                        queryHandler={this.queryHandler}
                        submitHandler={this.submitHandler}
                       />  
                <AddMovieBar movieToAdd={this.state.movieToAdd} queryHandler={this.queryHandler} addMovie={this.addMovie}/>
                <p>{this.state.result}</p>
                {/* Youre gonna put in MovieList in here */}
                {/* And pass into the movies array */}
                <MovieList movieList={this.state.movies}/>
                <div>Welcome to Movie List!</div>
            </div>
        )
    }
}


export default App;



// {this.state.movies.map((movie, index) => {
//     return <p key={index}><span >{movie.title}</span></p>
// })} 