import React, { useEffect, useState } from "react";
import RowOne from "./RowOne";
import RowTwo from "./RowTwo";
import RowThree from "./RowThree";
import RowFour from "./RowFour";

function GuessTable(props) {
    //FIRST GUESS 
    const [filmTitle, setFilmTitle] = useState(""); 
    const [year, setYear] = useState(""); 
    const [genre, setGenre] = useState(""); 
    const [company, setCompany] = useState(""); 
    const [actors, setActors] = useState([]); 
    const [director, setDirector] = useState(""); 

    //SECOND GUESS  
    const [secondFilmTitle, setSecondFilmTitle] = useState(""); 
    const [secondYear, setSecondYear] = useState(""); 
    const [secondGenre, setSecondGenre] = useState(""); 
    const [secondCompany, setSecondCompany] = useState(""); 
    const [secondActors, setSecondActors] = useState([]); 
    const [secondDirector, setSecondDirector] = useState(""); 

    //THIRD GUESS  
    const [thirdFilmTitle, setThirdFilmTitle] = useState(""); 
    const [thirdYear, setThirdYear] = useState(""); 
    const [thirdGenre, setThirdGenre] = useState(""); 
    const [thirdCompany, setThirdCompany] = useState(""); 
    const [thirdActors, setThirdActors] = useState([]); 
    const [thirdDirector, setThirdDirector] = useState(""); 

    //FOURTh GUESS  
    const [fourthFilmTitle, setFourthFilmTitle] = useState(""); 
    const [fourthYear, setFourthYear] = useState(""); 
    const [fourthGenre, setFourthGenre] = useState(""); 
    const [fourthCompany, setFourthCompany] = useState(""); 
    const [fourthActors, setFourthActors] = useState([]); 
    const [fourthDirector, setFourthDirector] = useState(""); 

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
            if (props.guessCount < 2) {    
                setFilmTitle(response.data.title);
                setYear(response.data.release_date.slice(0, 4))
                setGenre(response.data.genres[0].name)
                setCompany(response.data.production_companies[0].name)
            } else if (props.guessCount < 3) {
                setSecondFilmTitle(response.data.title);
                setSecondYear(response.data.release_date.slice(0, 4))
                setSecondGenre(response.data.genres[0].name)
                setSecondCompany(response.data.production_companies[0].name) 
            } else if (props.guessCount < 4) {
                setThirdFilmTitle(response.data.title);
                setThirdYear(response.data.release_date.slice(0, 4))
                setThirdGenre(response.data.genres[0].name)
                setThirdCompany(response.data.production_companies[0].name) 
            }  else if (props.guessCount < 5) {
                setFourthFilmTitle(response.data.title);
                setFourthYear(response.data.release_date.slice(0, 4))
                setFourthGenre(response.data.genres[0].name)
                setFourthCompany(response.data.production_companies[0].name) 
            }
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
            if (props.guessCount < 2 ){
            const cast = response.data.cast
            let actorsArr = []; 
            for (let i = 0; i < cast.length; i++) {
                actorsArr.push(cast[i].name)
            }
            setActors(actorsArr)
            const credits = response.data.crew 
            for (let i = 0; i < credits.length; i++) {
                if (credits[i].job === "Director") {
                    let director = credits[i].name
                    setDirector(director)
                }      
            };
        } else if (props.guessCount < 3) {
            const cast = response.data.cast
            let actorsArr = []; 
            for (let i = 0; i < cast.length; i++) {
                actorsArr.push(cast[i].name)
            }
            setSecondActors(actorsArr)
            const credits = response.data.crew 
            for (let i = 0; i < credits.length; i++) {
                if (credits[i].job === "Director") {
                    let director = credits[i].name
                    setSecondDirector(director)
                }      
            };  
        } else if (props.guessCount < 4) {
            const cast = response.data.cast
            let actorsArr = []; 
            for (let i = 0; i < cast.length; i++) {
                actorsArr.push(cast[i].name)
            }
            setThirdActors(actorsArr)
            const credits = response.data.crew 
            for (let i = 0; i < credits.length; i++) {
                if (credits[i].job === "Director") {
                    let director = credits[i].name
                    setThirdDirector(director)
                }      
            };  
        } else if (props.guessCount < 5) {
            const cast = response.data.cast
            let actorsArr = []; 
            for (let i = 0; i < cast.length; i++) {
                actorsArr.push(cast[i].name)
            }
            setFourthActors(actorsArr)
            const credits = response.data.crew 
            for (let i = 0; i < credits.length; i++) {
                if (credits[i].job === "Director") {
                    let director = credits[i].name
                    setFourthDirector(director)
                }      
            };  
        }
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

          {props.guessCount > 0 ? <RowOne guessCount={props.guessCount} filmTitle={filmTitle} director={director} actors={actors} genre={genre} company={company} year={year}
          correctActors={props.correctActors} correctDirector={props.correctDirector} correctTitle={props.correctTitle}
          correctCompany={props.correctCompany} correctGenre={props.correctGenre} correctYear={props.correctYear}/> : null} 

          {props.guessCount > 1 ? <RowTwo guessCount={props.guessCount} filmTitle={secondFilmTitle} director={secondDirector} actors={secondActors} genre={secondGenre} company={secondCompany} year={secondYear}
          correctActors={props.correctActors} correctDirector={props.correctDirector} correctTitle={props.correctTitle}
          correctCompany={props.correctCompany} correctGenre={props.correctGenre} correctYear={props.correctYear}/> : null} 
            
          {props.guessCount > 2 ? <RowThree guessCount={props.guessCount} filmTitle={thirdFilmTitle} director={thirdDirector} actors={thirdActors} genre={thirdGenre} company={thirdCompany} year={thirdYear}
          correctActors={props.correctActors} correctDirector={props.correctDirector} correctTitle={props.correctTitle}
          correctCompany={props.correctCompany} correctGenre={props.correctGenre} correctYear={props.correctYear}/> : null} 

          {props.guessCount > 3 ? <RowFour guessCount={props.guessCount} filmTitle={fourthFilmTitle} director={fourthDirector} actors={fourthActors} genre={fourthGenre} company={fourthCompany} year={fourthYear}
          correctActors={props.correctActors} correctDirector={props.correctDirector} correctTitle={props.correctTitle}
          correctCompany={props.correctCompany} correctGenre={props.correctGenre} correctYear={props.correctYear}/> : null} 
        </table>
        </div>
    )
}

export default GuessTable; 

