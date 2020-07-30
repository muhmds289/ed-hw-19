import React from "react";
// import SearchResults from "../SearchResults/SearchResults";

function SearchForm(props) {
    return (
    <form>
        <div class="form-group">
        <label for="search"></label>
        <input
            type="userSearch"
            class="form-control"
            id="userSearch"
            onChange={props.handleInputChange}
            value={props.keyword}
            aria-describedby="userSearch"
            placeholder="Search" />
        
        <br />
    
        </div>
    </form>
    );
}


export default SearchForm;