import React, { useState } from "react";

function Search() {
    const [actor, setActor] = useState(); 
    const getInputValue = (event) => {
        setActor(event.target.value); 
    }

    const actorQuery = () => {
        var axios = require('axios');
        var config = {
        method: 'get',
        url: 'https://api.themoviedb.org/3/search/?api_key=dc60bf976a71bca2cb82fc0c39372ba7&language=en-US&query=tom cruise&page=1&include_adult=false',
        headers: { }
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
    });
    }

    return (
        <div>
            <form className="search-container" action="">
            <input onChange={getInputValue} className="actors-searchbar" type="text" placeholder="Search Actors..." required/>
            <button onClick={actorQuery} className="actor-search-btn">Search</button>
            </form>
        </div>
    ); 
}; 

export default Search; 