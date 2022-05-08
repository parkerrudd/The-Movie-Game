import React, { useEffect, useState } from "react";
import Actor from "./actor";

function Search(props) {
    const [actor, setActor] = useState(''); 
    const [actorID, setActorID] = useState(''); 
    const [guess, setGuess] = useState(); 

    const getInputValue = (event) => {
        setActor(event.target.value); 
    }; 

    const actorQuery = () => {
        var axios = require('axios');

        var config = {
        method: 'get',
        url: 'https://api.themoviedb.org/3/search/person?&language=en-US&query=' + actor + '&page=1&include_adult=false',
        headers: { }
        };

        axios(config)
        .then(function (response) {
        setActorID(response.data.results[0].id);
        })
        .catch(function (error) {
        console.log(error);
    });
    }; 


    useEffect(() => {
        var axios = require('axios');

        var config = {
        method: 'get',
        url: 'https://api.themoviedb.org/3/person/' + actorID + '/movie_credits?7&language=en-US',
        headers: { 
        }
        };

        axios(config)
        .then(function (response) {
           const movies = response.data.cast;
           for (let i = 0; i < movies.length; i++) {
               if (movies[i].title.includes(props.title) && movies[i].release_date.slice(0, 4) === props.year) {
                return setGuess(true); 
               } 
           }
        })      
        .catch(function (error) {
        console.log(error);
        });
    }, [actorID]); 

    return (
        <div>
            <div className="search-container">
                <input onChange={getInputValue} className="actors-searchbar" type="text" placeholder="Search Actors..." required/>
                <button onClick={actorQuery} className="actor-search-btn">Guess</button>
            </div>

            {guess ? <Actor actor={actor} /> : null} 
        </div>
    ); 
}; 

export default Search; 