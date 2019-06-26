import React, {Component} from 'react';
import Movies from '../data/exampleVideoData.js';
import SearchBar from './SearchBar.jsx';
import AddMovieBar from './AddMovieBar.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           movies: Movies,
           currentQuery: '',
           result: ''
        }

        this.queryHandler = this.queryHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.addMovie = this.addMovie.bind(this);
    }

    addMovie(movie) {
        var moviesCopy = [...this.state.movies];
        moviesCopy.push(movie);
        this.setState({
            movies: moviesCopy
        })
    }

    submitHandler(event) {
        event.preventDefault();
        console.log('submithandler default prevented');
        for (var value of this.state.movies) {
            if (value.title.toLowerCase().includes(this.state.currentQuery.toLowerCase())) {
                this.setState({
                    result: value.title
                })
            }
        }
    }

    queryHandler(event) {
        // event.preventDefault();
        // debugger
        this.setState({
            currentQuery: event.target.value
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
                <AddMovieBar addMovie={this.addMovie}/>
                <p>{this.state.result}</p>
                <div>Welcome to Movie List!</div>
            </div>
        )
    }
}


export default App;



// {this.state.movies.map((movie, index) => {
//     return <p key={index}><span >{movie.title}</span></p>
// })} 