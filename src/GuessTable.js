import React, { useEffect, useState } from "react";

function GuessTable(props) {
    const [filmTitle, setFilmTitle] = useState(""); 
    const [year, setYear] = useState(""); 
    const [genre, setGenre] = useState(""); 
    const [company, setCompany] = useState(""); 
    const [actors, setActors] = useState([]); 
    const [director, setDirector] = useState(""); 

    //GET DETAILS
    useEffect(() => {
        const axios = require('axios');

        let config = {
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${props.movieID}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`,
        params: {}
        };

        axios(config)
        .then((response) => {
        setFilmTitle(response.data.title);
        setYear(response.data.release_date.slice(0, 4))
        setGenre(response.data.genres[0].name)
        setCompany(response.data.production_companies[0].name)
        })
        .catch((error) => {
        console.log(error);
        });

    }, [props.movieID])

    //GET CREDITS

    useEffect(() => {
        const axios = require('axios');

        let config = {
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${props.movieID}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`,
        };

        axios(config)
        .then((response) => {
            const cast = response.data.cast
            let actorsArr = []; 
            for (let i = 0; i < cast.length; i++) {
                actorsArr.push(cast[i].name)
            }
            setActors(actorsArr)
            const credits = response.data.crew
            let director = ""; 
            for (let i = 0; i < credits.length; i++) {
                if (credits[i].job === "Director") {
                    let director = credits[i].name
                    setDirector(director)
                }      
            };

        })
        .catch((error) => {
        console.log(error);
        });

    }, [props.movieID])

    return (
        <div className="table-section">
        <table className="table">
            <tr id="headers"> 
                <th>Title</th>
                <th>Director</th>
                <th>Cast</th>
                <th>Genre</th>
                <th>Company</th>
                <th>Year</th>
            </tr>
            <tr id="results">
                <td>{filmTitle}</td>
                <td>{director}</td>
                <td>{actors[0]}</td>
                <td>{genre}</td>
                <td>{company}</td>
                <td>{year}</td>
            </tr>
            
        </table>
        </div>
    )
}

export default GuessTable; 

