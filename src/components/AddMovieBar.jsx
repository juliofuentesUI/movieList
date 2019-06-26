import React, {Component} from 'react';

var AddMovieBar = (props) => {
    return (
    <div>
        <input type="text"/>
        <button onClick={props.addMovie}>Add Movie</button>
    </div>
    )
}

export default AddMovieBar;