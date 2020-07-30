import React from "react";
import "../styles/Header";

function Header(){

    return (
    <div class="jumbotron jumbotron-fluid bg-info" style={{color:"#b3b3b3"}}>
        <div class="container">
            <h1 class="display-4">User Directory</h1>
            <p class="lead">Use the search box to narrow your results.</p>
        </div>
    </div>
);
    }
export default Header;
