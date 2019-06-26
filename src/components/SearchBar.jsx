import React, {Component} from 'react';


const SearchBar = (props) => {
    return (
    <div>
        <form action="" onSubmit={props.submitHandler}>
            <input type="text" onChange={props.queryHandler} name="currentQuery" value={props.currentQuery}/>
            <input type="submit" value="Submit" />
            <br/>
        </form>
    </div>    
    )
}

export default SearchBar;