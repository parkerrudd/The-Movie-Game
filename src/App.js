import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css'; 
import Letters from "./letters";
import Actor from "./actor";
import GuessTable from "./GuessTable";
// import Autocomplete from "./Autocomplete";


function App() {
  const [current, setCurrent] = useState();
  const [year, setYear] = useState(); 
  const [wrongCount, setWrongCount] = useState(0); 
  const [rightCount, setRightCount] = useState(0); 
  const [guessCount, setGuessCount] = useState(0); 
  const [guessesArr, setGuessesArr] = useState([]); 
  const [mRight, setMRight] = useState(false); 
  const [mWrong, setMWrong] = useState(false); 


  //GENERATE STARTING POINT
  const firstMovie = ['Iron Man', 'Avatar', 'Titanic', 'Shawshank Redemption']
  const day = 0; //write function to increase by one every new day

  useEffect(() => {
    var axios = require('axios');
    var config = {
      method: 'get',
      url: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false`,
      params: {query: firstMovie[day]}
    };
    
    axios(config)
    .then(function (response) {
      setCurrent(response.data.results[0].title);
      let release = response.data.results[0].release_date
      setYear(release.slice(0, 4));
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []); 

    const [actor, setActor] = useState(''); 
    const [actorID, setActorID] = useState(''); 
    const [guess, setGuess] = useState(); 


    //GET ACTOR AND SET ID
    const getInputValue = (event) => {
        setActor(event.target.value); 
    }; 

    const actorQuery = () => { 
        var axios = require('axios');

        var config = {
        method: 'get',
        url: `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false`,
        params: {query: actor},  
      };

        axios(config)
        .then(function (response) {
        console.log(response.data.results[0].id);
        setActorID(response.data.results[0].id); 
        })
        .catch(function (error) {
        console.log(error);
    });
    }; 

    //CHECK IF GUESS IS CORRECT
    useEffect(() => {
        var axios = require('axios');

        var config = {
        method: 'get',
        url: `https://api.themoviedb.org/3/person/${actorID}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`,
        headers: { 
        }
        };

        axios(config)
        .then(function (response) {
           const movies = response.data.cast;
           let arr = []; 
           for (let i = 0; i < movies.length; i++) {
               if (movies[i].title.includes(current) && movies[i].release_date.slice(0, 4) === year) {
                 setGuessesArr(guessesArr.push(1)); 
                } 
                if (guessesArr.length > 0) {
                  setCurrent(actor)
                  setGuessCount(guessCount + 1); 
                  setRightCount(rightCount + 1); 
                } else {
                  setWrongCount(wrongCount + 1); 
                  setGuessCount(guessCount + 1); 
                }
            }
        })       
        .catch(function (error) {
        console.log(error);
        });
    }, [actorID]); 

    //ADD RIGHT OR WRONG LETTER COLORS
    useEffect(() => {
      if (guessCount > 0  && guessesArr.length > 0) {
        setMRight(true)
      } if (guessCount > 0 && guessesArr.length < 1) {
        setMWrong(true)
      } 
    }, [guessCount])

  return (
    <div className="App">
      <div className="guess-section">  
        <Letters mRight={mRight} mWrong={mWrong}/>
        
          <Actor current={current} year={year} />

          <h2>Count: {guessCount}</h2>
        
            <div>
                <div className="search-container">
                    <input onChange={getInputValue} className="actors-searchbar" autoComplete="list" type="text" list="search-suggestions" placeholder="Search Movies..." required/>
                    <button onClick={actorQuery} className="actor-search-btn">Guess</button>
                </div>

            </div>
      </div>   
        <GuessTable /> 
    </div>
  );
}

export default App;
