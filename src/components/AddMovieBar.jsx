import React, {Component} from 'react';

var AddMovieBar = (props) => {
    //i can do this with a form, no problem.
    //but...how to extract input values with no state and no form
    return (
    <div>
        <input type="text" name="movieToAdd" onChange={props.queryHandler} value={props.movieToAdd}/>
        <button onClick={props.addMovie}>Add Movie</button>
    </div>
    )
}

export default AddMovieBar;