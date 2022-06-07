import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css'; 
import Letters from "./letters";
import GuessTable from "./GuessTable";
import WinPage from "./WinPage";


function App() {
  const [current, setCurrent] = useState();
  const [guessCount, setGuessCount] = useState(0); 
  

  const [correctTitle, setCorrectTitle] = useState(""); 
  const [correctID, setCorrectID] = useState(""); 


  //GENERATE STARTING POINT
  const firstMovie = ['Iron Man', 'Avatar', 'Titanic', 'Shawshank Redemption', 'Reservoir Dogs', 'Groundhog Day', 'Paddington 2', 'Amelie', 'Brokeback Mountain', 'Donnie Darko', 'Scott Pilgrim Vs. The World', 'Portrait Of A Lady On Fire', 'Léon', 'Logan', 'The Terminator', 'No Country For Old Men', 'Titanic', 'The Exorcist', 'Black Panther', 'Shaun Of The Dead' ]
  let day = 0; 
  var today = new Date();
  var clock = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const [time, setTime] = useState(""); 


//CLOCK 
  // useEffect(() => {
  //   if (clock === "18:30:5") { 
  //     setWinPage(false); 
  //     setDay(day + 1); 
  //     window.location.reload(); 
  //   }
  // }, [time])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(clock); 
  //     console.log('This will run every second!');
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [clock]);

  useEffect(() => {
    day = (Math.floor(Math.random() * firstMovie.length))
    var axios = require('axios');
    var config = {
      method: 'get',
      url: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false`,
      params: {query: firstMovie[day]}
    };
    
    axios(config)
    .then(function (response) {
      setCurrent(response.data.results[0].title);
      setCorrectTitle(response.data.results[0].title)
      setCorrectID(response.data.results[0].id)
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []); 

    const [movie, setMovie] = useState(''); 
    const [guessMovieID, setGuessMovieID] = useState(''); 
    const [guess, setGuess] = useState(); 
 
    //GET MOVIE GUESS AND SET ID
    const getInputValue = (event) => {
        setMovie(event.target.value); 
    }; 

    const movieQuery = () => {
      const axios = require('axios');

      let config = {
        method: 'get',
        url: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false`,
        params: {query: movie}, 
        
      };
      
      axios(config)
      .then((response) => {
        setGuessMovieID(response.data.results[0].id);
        setGuessCount(guessCount + 1)
      })
      .catch((error) => {
        console.log(error);
      }); 
    }; 

    const [correctYear, setCorrectYear] = useState(""); 
    const [correctCompany, setCorrectCompany] = useState(""); 
    const [correctGenre, setCorrectGenre] = useState(""); 
    const [moviePoster, setMoviePoster] = useState(""); 


    //GET CORRECT MOVIE DETAILS
    useEffect(() => {
      const axios = require('axios');

      let config = {
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/${correctID}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`,
      params: {}
      };

      axios(config)
      .then((response) => {
        setCorrectYear(response.data.release_date.slice(0, 4))
        setCorrectGenre(response.data.genres[0].name)
        setCorrectCompany(response.data.production_companies[0].name)
        setMoviePoster(response.data.poster_path)
      })
      .catch((error) => {
      console.log(error);
      });

    }, [correctID])

    const [correctDirector, setCorrectDirector] = useState(""); 
    const [correctActors, setCorrectActors] = useState([]); 

    useEffect(() => {
      const axios = require('axios');

      let config = {
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/${correctID}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`,
      };

      axios(config)
      .then((response) => {
          const credits = response.data.crew
          let correctActorsArr = []; 
          const cast = response.data.cast
          for (let i = 0; i < cast.length; i++) {
            correctActorsArr.push(cast[i].name)
          }
          setCorrectActors(correctActorsArr)
          let director = ""; 
          for (let i = 0; i < credits.length; i++) {
              if (credits[i].job === "Director") {
                  let director = credits[i].name
                  setCorrectDirector(director)
                }      
          };
          
      })
      .catch((error) => {
      console.log(error);
      });

  }, [correctID]); 

  //RESET GAME
  const [winPage, setWinPage] = useState(false); 
  const [playAgain, setPlayAgain] = useState(false); 

  useEffect(() => {
    if (correctTitle != null) setWinPage(false)

  }, [correctTitle])

  useEffect(() => {
    setGuessMovieID('')
    setWinPage(false)
  
  }, [])

  useEffect(() => {
    if (correctID === guessMovieID && guessCount > 0) {
    setWinPage(true);
    // setPlayAgain(false);
  
  }
  }, [guessMovieID])

  useEffect(() => {
    if (playAgain === true) {
      window.location.reload()
      setWinPage(false);

    }
  }, [playAgain])

  useEffect(() => {
    if (guessCount === 8) {
      setWinPage(true)
    }
  }, [guessCount])

  return (
    <div className="App">
      <div className="guess-section">  
        <h1 id="the">The</h1>
        <Letters/>
        <h1 id="game">Game</h1>
  
          <h2 id="guess-count">Guess Count: {guessCount}/8</h2>
        
            <div>
                <div className="search-container">
                    <input onChange={getInputValue} className="actors-searchbar" autoComplete="list" type="text" list="search-suggestions" placeholder="Search Movies..." required/>
                    <button onClick={movieQuery} className="actor-search-btn">Guess</button>
                </div>

            </div>
      </div>   
      { winPage ? <WinPage updatePlayAgain={playAgain => setPlayAgain(playAgain)} time={clock} guessCount={guessCount} correctTitle={correctTitle} moviePoster={moviePoster}/> : null }

        <GuessTable  time={clock} movieID={guessMovieID} guessCount={guessCount} 
        correctActors={correctActors} correctCompany={correctCompany} correctDirector={correctDirector}
        correctGenre={correctGenre} correctTitle={correctTitle} correctYear={correctYear} moviePoster={moviePoster}/> 
    </div>
  );
}

export default App;
