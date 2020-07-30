import React from "react";

// import SearchForm from "../SearchForm/SearchForm";

import Container from "../container";

function SearchResults(props)  {

    return (
    <Container>

        <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
            </tr>
        </thead>
        <tbody>
            {props.results.map((person) => (
            <tr>
                <td> 
                <img key={person.id.value} src={person.picture.thumbnail} alt=" random person" />
                </td>

                <td> {person.name.first}</td>
                <td> {person.cell}</td>
                <td> {person.email}</td>
                <td> {person.dob.date}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </Container>
    );
}


export default SearchResults;