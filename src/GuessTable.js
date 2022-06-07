import React, { useEffect, useState } from "react";
import RowOne from "./RowOne";
import RowTwo from "./RowTwo";
import RowThree from "./RowThree";
import RowFour from "./RowFour";
import RowFive from "./RowFive";
import RowSix from "./RowSix";
import RowSeven from "./RowSeven";
import RowEight from "./RowEight";
import WinPage from "./WinPage";

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

    //FOURTH GUESS  
    const [fourthFilmTitle, setFourthFilmTitle] = useState(""); 
    const [fourthYear, setFourthYear] = useState(""); 
    const [fourthGenre, setFourthGenre] = useState(""); 
    const [fourthCompany, setFourthCompany] = useState(""); 
    const [fourthActors, setFourthActors] = useState([]); 
    const [fourthDirector, setFourthDirector] = useState(""); 

    //FIFTH GUESS  
    const [fifthFilmTitle, setFifthFilmTitle] = useState(""); 
    const [fifthYear, setFifthYear] = useState(""); 
    const [fifthGenre, setFifthGenre] = useState(""); 
    const [fifthCompany, setFifthCompany] = useState(""); 
    const [fifthActors, setFifthActors] = useState([]); 
    const [fifthDirector, setFifthDirector] = useState(""); 

    //SIXTH GUESS  
    const [sixthFilmTitle, setSixthFilmTitle] = useState(""); 
    const [sixthYear, setSixthYear] = useState(""); 
    const [sixthGenre, setSixthGenre] = useState(""); 
    const [sixthCompany, setSixthCompany] = useState(""); 
    const [sixthActors, setSixthActors] = useState([]); 
    const [sixthDirector, setSixthDirector] = useState(""); 

    //SEVENTH GUESS  
    const [seventhFilmTitle, setSeventhFilmTitle] = useState(""); 
    const [seventhYear, setSeventhYear] = useState(""); 
    const [seventhGenre, setSeventhGenre] = useState(""); 
    const [seventhCompany, setSeventhCompany] = useState(""); 
    const [seventhActors, setSeventhActors] = useState([]); 
    const [seventhDirector, setSeventhDirector] = useState(""); 

    //EIGHTH GUESS  
    const [eighthFilmTitle, setEighthFilmTitle] = useState(""); 
    const [eighthYear, setEighthYear] = useState(""); 
    const [eighthGenre, setEighthGenre] = useState(""); 
    const [eighthCompany, setEighthCompany] = useState(""); 
    const [eighthActors, setEighthActors] = useState([]); 
    const [eighthDirector, setEighthDirector] = useState(""); 

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
            }   else if (props.guessCount < 6) {
                setFifthFilmTitle(response.data.title);
                setFifthYear(response.data.release_date.slice(0, 4))
                setFifthGenre(response.data.genres[0].name)
                setFifthCompany(response.data.production_companies[0].name) 
            } else if (props.guessCount < 7) {
                setSixthFilmTitle(response.data.title);
                setSixthYear(response.data.release_date.slice(0, 4))
                setSixthGenre(response.data.genres[0].name)
                setSixthCompany(response.data.production_companies[0].name) 
            } else if (props.guessCount < 8) {
                setSeventhFilmTitle(response.data.title);
                setSeventhYear(response.data.release_date.slice(0, 4))
                setSeventhGenre(response.data.genres[0].name)
                setSeventhCompany(response.data.production_companies[0].name) 
            } else if (props.guessCount < 9) {
                setEighthFilmTitle(response.data.title);
                setEighthYear(response.data.release_date.slice(0, 4))
                setEighthGenre(response.data.genres[0].name)
                setEighthCompany(response.data.production_companies[0].name) 
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
        } else if (props.guessCount < 6) {
            const cast = response.data.cast
            let actorsArr = []; 
            for (let i = 0; i < cast.length; i++) {
                actorsArr.push(cast[i].name)
            }
            setFifthActors(actorsArr)
            const credits = response.data.crew 
            for (let i = 0; i < credits.length; i++) {
                if (credits[i].job === "Director") {
                    let director = credits[i].name
                    setFifthDirector(director)
                }      
            };  
        } else if (props.guessCount < 7) {
            const cast = response.data.cast
            let actorsArr = []; 
            for (let i = 0; i < cast.length; i++) {
                actorsArr.push(cast[i].name)
            }
            setSixthActors(actorsArr)
            const credits = response.data.crew 
            for (let i = 0; i < credits.length; i++) {
                if (credits[i].job === "Director") {
                    let director = credits[i].name
                    setSixthDirector(director)
                }      
            };  
        } else if (props.guessCount < 8) {
            const cast = response.data.cast
            let actorsArr = []; 
            for (let i = 0; i < cast.length; i++) {
                actorsArr.push(cast[i].name)
            }
            setSeventhActors(actorsArr)
            const credits = response.data.crew 
            for (let i = 0; i < credits.length; i++) {
                if (credits[i].job === "Director") {
                    let director = credits[i].name
                    setSeventhDirector(director)
                }      
            };  
        } else if (props.guessCount < 9) {
            const cast = response.data.cast
            let actorsArr = []; 
            for (let i = 0; i < cast.length; i++) {
                actorsArr.push(cast[i].name)
            }
            setEighthActors(actorsArr)
            const credits = response.data.crew 
            for (let i = 0; i < credits.length; i++) {
                if (credits[i].job === "Director") {
                    let director = credits[i].name
                    setEighthDirector(director) 
                }      
            };  
        }
        })
        .catch((error) => {
        console.log(error);
        });

    }, [props.movieID])

    //ADD WIN PAGE IF CORRECT MOVIE IS GUESSED
    const [right, setRight] = useState(false); 

    // useEffect(() => {
    //     if (props.correctTitle === filmTitle || props.correctTitle === secondFilmTitle || props.correctTitle === thirdFilmTitle || props.correctTitle === fourthFilmTitle || props.correctTitle === fifthFilmTitle || props.correctTitle === sixthFilmTitle || props.correctTitle === seventhFilmTitle || props.correctTitle === eighthFilmTitle) {
    //         setRight(true); 
    //     }
    // }, [props.guessCount])

    // useEffect(() => {
    //     if (filmTitle.textContent === props.correctTitle.textContent && props.guessCount > 0) {
    //         setRight(true); 
    //     }
    // }, [filmTitle]); 

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

       { right ? <WinPage updatePlayAgain={props.updatePlayAgain} time={props.time} guessCount={props.guessCount} correctTitle={props.correctTitle} moviePoster={props.moviePoster}/> : null }

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

          {props.guessCount > 4 ? <RowFive guessCount={props.guessCount} filmTitle={fifthFilmTitle} director={fifthDirector} actors={fifthActors} genre={fifthGenre} company={fifthCompany} year={fifthYear}
          correctActors={props.correctActors} correctDirector={props.correctDirector} correctTitle={props.correctTitle}
          correctCompany={props.correctCompany} correctGenre={props.correctGenre} correctYear={props.correctYear}/> : null} 

          {props.guessCount > 5 ? <RowSix guessCount={props.guessCount} filmTitle={sixthFilmTitle} director={sixthDirector} actors={sixthActors} genre={sixthGenre} company={sixthCompany} year={sixthYear}
          correctActors={props.correctActors} correctDirector={props.correctDirector} correctTitle={props.correctTitle}
          correctCompany={props.correctCompany} correctGenre={props.correctGenre} correctYear={props.correctYear}/> : null} 

          {props.guessCount > 6 ? <RowSeven guessCount={props.guessCount} filmTitle={seventhFilmTitle} director={seventhDirector} actors={seventhActors} genre={seventhGenre} company={seventhCompany} year={seventhYear}
          correctActors={props.correctActors} correctDirector={props.correctDirector} correctTitle={props.correctTitle}
          correctCompany={props.correctCompany} correctGenre={props.correctGenre} correctYear={props.correctYear}/> : null} 

          {props.guessCount > 7 ? <RowEight guessCount={props.guessCount} filmTitle={eighthFilmTitle} director={eighthDirector} actors={eighthActors} genre={eighthGenre} company={eighthCompany} year={eighthYear}
          correctActors={props.correctActors} correctDirector={props.correctDirector} correctTitle={props.correctTitle}
          correctCompany={props.correctCompany} correctGenre={props.correctGenre} correctYear={props.correctYear}/> : null} 
        </table>
        </div>
    ) 
}

export default GuessTable; 

